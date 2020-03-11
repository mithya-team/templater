import React, { useContext, useState, useEffect } from 'react'
import {
    createStyles, makeStyles,
    Slide,
    Dialog, Box, AppBar, Toolbar, Typography, Button, CircularProgress, Collapse, FormControl, Select, MenuItem, InputLabel
} from '@material-ui/core'
import { Context } from '../../Context';
import Form from '../../Form';
import { config } from '../../Config';
import { Template, TemplateType } from '../../types';
import { generateHTML } from '../../utils';
import DialogHeader from './DialogHeader';

interface IProps { }

export type FormKey = 'name' | 'subject' | 'body' | 'banner' | 'smsBody' | 'enabled' | 'fields' | 'type'



function Transition(props: any) {
    return <Slide direction="up" {...props} />;
}


const LVL1_KEYS: FormKey[] = ['name', 'enabled', 'fields', 'type'];

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
    const [templateType, setTemplateType] = useState<TemplateType>('forgetPassword');
    const [step, setStep] = useState(1);
    const TEMPLATE_TYPES = Object.keys(templateTypes) as TemplateType[];

    useEffect(() => {
        if (selectedTemplate)
            setStep(2)
        setTemplate(selectedTemplate ?? {});
    }, [dialogOpen, selectedTemplate])



    const handleChange = (key: FormKey, value: any) => {

        if (LVL1_KEYS.indexOf(key) > -1)
            setTemplate({ ...template, [key]: value });
        else if (key === 'smsBody')
            setTemplate({ ...template, sms: { 'body': value } })
        else
            setTemplate({ ...template, email: { ...(template.email || { body: '', html: '', subject: '' }), [key]: value } })
    }


    const handleTemplateSelect = (e: React.ChangeEvent<any>) => {
        setTemplateType(e.target.value as TemplateType)
        // setStep(2);
    }

    const handleSubmit = async () => {
        const _template: Partial<Template> = {
            enabled: false,
            type: templateType,
            ...template,
            email: {
                ...(template.email || { body: '', html: '', subject: '' }),
                html: generateHTML(template.email?.body || '', template.email?.banner)
            }
        }
        try {
            await saveChanges(_template);
            setTemplate({})
            setStep(1);
            closeDialog();
        } catch (error) {

        }

    }

    const close = () => {
        closeDialog();
        setStep(1);
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
                <Collapse in={step === 1}>
                    <Box m="0 auto" width="300px">
                        <FormControl fullWidth>
                            <InputLabel>Select a type</InputLabel>
                            <Select value={templateType} onChange={handleTemplateSelect}>
                                {
                                    TEMPLATE_TYPES.map((t, i) => (
                                        <MenuItem key={i} value={t}>{t}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <Box mt={2}>
                            <Button onClick={() => setStep(2)} color="primary" variant="outlined">Continue</Button>
                        </Box>
                    </Box>
                </Collapse>
                <Collapse in={step === 2}>
                    <Form
                        handleBack={() => setStep(1)}
                        type={templateType}
                        template={template}
                        onChange={handleChange}
                    />
                </Collapse>
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