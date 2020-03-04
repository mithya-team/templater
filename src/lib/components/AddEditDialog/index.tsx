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

interface IProps { }

export type FormKey = 'name' | 'subject' | 'body'



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



    const handleChange = (key: FormKey, value: string) => {
        if (key === 'name')
            setTemplate({ ...template, [key]: value });
        else
            setTemplate({ ...template, email: { ...(template.email || { body: '', html: '', subject: '' }), [key]: value } })
    }

    const handleSubmit = async () => {
        const isNew = !template.id;
        console.log("is new?", isNew)
        console.log("submitting", template)
        try {
            await saveChanges(template);
            setTemplate({})
            closeDialog();
        } catch (error) {

        }

    }

    const DIALOG_TITLE = selectedTemplate ? `Edit email - ${selectedTemplate.name}` : 'Create email'

    return (
        <Dialog open={dialogOpen} TransitionComponent={Transition} PaperProps={{ className: classes.root }} onClose={closeDialog} fullScreen>
            <AppBar {...dialogProps.toolbarProps}>
                <Toolbar >
                    <Box>
                        <Typography>{DIALOG_TITLE}</Typography>
                    </Box>
                    <Box flex={1} />
                    <Box display="flex" alignItems="center">
                        <Box mr={2}>
                            <Button {...dialogProps.secondaryActionButtonProps} onClick={closeDialog}>Cancel</Button>
                        </Box>
                        <Button variant="contained" color="primary" {...dialogProps.mainActionButtonProps} onClick={handleSubmit} >
                            {
                                status === 'loading' ? <CircularProgress /> : 'Submit'
                            }
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

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