import React, { useContext, useState, useEffect, Provider } from 'react'
import {
    createStyles, makeStyles,
    Slide,
    Dialog, Box, AppBar, Toolbar, Typography, Button, CircularProgress, Collapse, FormControl, Select, MenuItem, InputLabel, Paper
} from '@material-ui/core'
import { Context } from '../../Context';
import Form from '../../Form';
import { config } from '../../Config';
import { Template, FormKey, TemplateTypeConfig } from '../../types';
import { generateHTML } from '../../utils';
import DialogHeader from './DialogHeader';

interface IProps { }




function Transition(props: any) {
    return <Slide direction="up" {...props} />;
}


// const LVL1_KEYS: FormKey[] = ['name', 'enabled', 'flow'];

const AddEditDialog: React.FC<IProps> = () => {

    const classes = useStyles()
    const { dialogProps } = config;
    const context = useContext(Context);
    if (!context) return <div />
    const {
        dialogOpen,
        closeDialog,
        status,
        templateTypes,
        selectedTemplate,
        saveChanges
    } = context;

    const [template, setTemplate] = useState<Partial<Template>>(selectedTemplate ?? {})
    const [templateType, setTemplateType] = useState('');
    const TEMPLATE_FLOWS = getTemplateFlows(templateTypes)


    useEffect(() => {
        setTemplate(selectedTemplate ?? {});
    }, [dialogOpen, selectedTemplate])



    const handleChange = (key: FormKey, value: any) => {

        // if (LVL1_KEYS.indexOf(key) > -1)
        //     setTemplate({ ...template, [key]: value });
        // else if (key === 'smsBody')
        //     setTemplate({ ...template, sms: { 'body': value } })
        // else
        //     setTemplate({ ...template, email: { ...(template.email || { body: '', html: '', subject: '' }), [key]: value } })
    }


    const handleTemplateSelect = (e: React.ChangeEvent<any>) => {
        setTemplateType(e.target.value)
        // setStep(2);
    }

    const handleSubmit = async () => {
        // const _template: Partial<Template> = {
        //     enabled: false,
        //     ...template,
        //     type: templateType,
        //     email: {
        //         ...(template.email || { body: '', html: '', subject: '' }),
        //         html: generateHTML(template.email?.body || '', template.email?.banner)
        //     }
        // }
        // try {
        //     await saveChanges(_template);
        //     setTemplate({})
        //     setStep(1);
        //     closeDialog();
        // } catch (error) {

        // }

    }

    const close = () => {
        closeDialog();
    }

    const DIALOG_TITLE = selectedTemplate ? `Edit email - ${selectedTemplate.name}` : 'Create email'

    return (
        <Dialog open={dialogOpen} TransitionComponent={Transition} PaperProps={{ className: classes.root }} onClose={close} fullScreen>
            <DialogHeader
                dialogTitle={DIALOG_TITLE}
                handleClose={close}
                handleSubmit={handleSubmit}
                loading={status === 'loading'}
            />
            <Box {...dialogProps.containerProps} margin="100px auto" width="600px">


                <Form
                    // handleBack={() => setStep(1)}
                    // type={templateType}
                    flows={TEMPLATE_FLOWS}
                    fields={templateTypes[templateType]?.fields || []}
                    template={template}
                    onChange={handleChange}
                />
            </Box>
        </Dialog>
    )
}


const getTemplateFlows = (templateFlows: Partial<TemplateTypeConfig>) => {
    const ITEMS: Array<{ name: string, value: string }> = [];
    Object.keys(templateFlows).forEach(k => {
        ITEMS.push({ name: templateFlows[k]?.name || k, value: k });
    })
    return ITEMS;
}

const useStyles = makeStyles(() => createStyles({
    root: {
        backgroundColor: '#F5F5F5'
    },

}))

export default AddEditDialog