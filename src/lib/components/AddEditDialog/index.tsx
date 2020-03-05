import React, { useContext, useState, useEffect } from 'react'
import {
    createStyles, makeStyles,
    Slide,
    Dialog, Box, AppBar, Toolbar, Typography, Button, CircularProgress
} from '@material-ui/core'
import { Context } from '../../Context';
import Form from '../../Form';
import { config } from '../../Config';
import { Template } from '../../types';
import { generateHTML } from '../../utils';
import DialogHeader from './DialogHeader';

interface IProps { }

export type FormKey = 'name' | 'subject' | 'body' | 'banner'



function Transition(props: any) {
    return <Slide direction="up" {...props} />;
}



const AddEditDialog: React.FC<IProps> = () => {

    const classes = useStyles()
    const { dialogProps } = config;
    const context = useContext(Context);
    if (!context) return <div />
    const {
        dialogOpen,
        closeDialog,
        status,
        selectedTemplate,
        saveChanges
    } = context;

    const [template, setTemplate] = useState<Partial<Template>>(selectedTemplate ?? {})



    useEffect(() => {
        setTemplate(selectedTemplate ?? {});
    }, [dialogOpen, selectedTemplate])



    const handleChange = (key: FormKey, value: any) => {
        if (key === 'name')
            setTemplate({ ...template, [key]: value });
        else
            setTemplate({ ...template, email: { ...(template.email || { body: '', html: '', subject: '' }), [key]: value } })
    }

    const handleSubmit = async () => {
        const isNew = !template.id;
        const _template: Partial<Template> = {
            ...template,
            email: {
                ...(template.email || { body: '', html: '', subject: '' }),
                html: generateHTML(template.email?.body || '', template.email?.banner)
            }
        }
        console.log("is new?", isNew)
        console.log("submitting", _template)
        try {
            await saveChanges(_template);
            setTemplate({})
            closeDialog();
        } catch (error) {

        }

    }

    const DIALOG_TITLE = selectedTemplate ? `Edit email - ${selectedTemplate.name}` : 'Create email'

    return (
        <Dialog open={dialogOpen} TransitionComponent={Transition} PaperProps={{ className: classes.root }} onClose={closeDialog} fullScreen>
            <DialogHeader
                dialogTitle={DIALOG_TITLE}
                handleClose={closeDialog}
                handleSubmit={handleSubmit}
                loading={status === 'loading'}
            />
            <Box {...dialogProps.containerProps} margin="100px auto" width="600px">
                <Form
                    template={template}
                    onChange={handleChange}
                />
            </Box>
        </Dialog>
    )
}

const useStyles = makeStyles(() => createStyles({
    root: {
        backgroundColor: '#F5F5F5'
    }
}))

export default AddEditDialog