import React, { useState, createRef, useEffect } from 'react'
import { createStyles, makeStyles, FormControl, InputLabel, Input, Box, Typography, Theme, IconButton, Icon, FormControlLabel, Checkbox, Select, MenuItem, Collapse } from '@material-ui/core'
import { Template, TPicture, TemplateTypeField, FormKey } from '../types';
import { Paper } from '@material-ui/core';
import { config } from '../Config';
import ReactQuill, { Quill } from 'react-quill'
import SingleImageUpload from './ImageUpload';
import BodyFields from '../components/BodyFields';


export interface IFormProps {
    fields?: TemplateTypeField[]
    template: Partial<Template>
    flows: string[]
    onChange: (key: FormKey, value: any) => void
}

let curQuillInputIndex = 0;
const Form: React.FC<IFormProps> = (props) => {
    const { template, onChange, fields, flows = [] } = props;
    const [loading, setLoading] = useState(false);
    const { dialogProps } = config
    const [step, setStep] = useState<1 | 2>(1);
    const classes = useStyles(props)
    const quillRef = createRef<ReactQuill>();

    const onImagesSelected = (file: any) => {
        setLoading(true)
    }

    useEffect(() => {
        if (template.flow && template.flow !== '' && step === 1)
            setStep(2);

    }, [template])

    useEffect(() => {
        if (!quillRef.current) return;
        const editor = quillRef.current.getEditor();
        // editor.on('selection-change', (range) => {
        //     console.log("seclection change", range?.index)
        //     if (range)
        //         curQuillInputIndex = range.index;
        // })
        editor.on('editor-change', () => {
            const selection = editor.getSelection();
            console.log("selection", selection?.index)
            if (selection) curQuillInputIndex = selection.index;
        })

    }, [quillRef])


    const onImageUploadComplete = (current: any, response: TPicture) => {
        console.log("upload completed", response);
        onChange('banner', response)
        setLoading(false);
    }

    const handleRteChange = (content: string) => onChange('body', content)


    const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.name as FormKey, e.target.value);
    }

    const handleInsertValue = (value: string) => {
        const valueToBeAppended = `<%= ${value} %>`;
        if (!quillRef.current) return;
        const editor = quillRef.current.getEditor();
        console.log("quill ref selection", editor, curQuillInputIndex);
        editor.insertText(curQuillInputIndex, valueToBeAppended);

    }

    const EMAIL_INPUT_CONFIG: { label: string, name: FormKey, value: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }[] = [
        { label: 'EMAIL NAME (internal purpose only)', name: 'name', value: template.name || '', handleChange: _handleChange },
        { label: 'EMAIL SUBJECT', name: 'subject', value: template.templateData?.subject || '', handleChange: _handleChange },
    ]

    const SMS_INPUT_CONFIG: { label: string, name: FormKey, value: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }[] = [
        { label: 'SMS BODY', name: 'body', value: template.templateData?.body || '', handleChange: _handleChange },
    ]

    return (
        <div>
            <Paper>
                <Box p={3} display="flex" alignItems="center">
                    {step === 1 ? (
                        <FormControl fullWidth>
                            <InputLabel>Select {template.channel} type</InputLabel>
                            <Select
                                name="flow"
                                value={template.flow || ''}
                                onChange={_handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {flows.map(flow => (
                                    <MenuItem key={flow} value={flow}>
                                        {flow}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : (
                            <Box display="flex" alignItems="center">
                                <IconButton onClick={() => setStep(1)}>
                                    <Icon>keyboard_arrow_left</Icon>
                                </IconButton>
                                <Typography className={classes.typeLabel}>Template type <span>{template.flow}</span></Typography>
                            </Box>
                        )
                    }

                </Box>
            </Paper>

            {props.template.channel === 'email' ? (
                <>
                    <Box my={3} position="relative">
                        <SingleImageUpload
                            placeholderText=" "
                            // dimension={{ height: '250px' }}
                            folderName={'template'}
                            imageUrl={template?.templateData?.banner?.url}
                            loading={loading}
                            onImageSelected={onImagesSelected}
                            onImageUploadComplete={onImageUploadComplete}
                        />
                    </Box>

                    {/* <Paper elevation={1} className={classes.container} {...dialogProps.formContainerProps}>
                        <FormControlLabel value={!!template.enabled} onChange={() => onChange('enabled', !template.enabled)} control={<Checkbox />} label="Enabled" />
                    </Paper> */}

                    <Paper elevation={1} className={classes.container} {...dialogProps.formContainerProps}>
                        {
                            template.slug ?
                                <Typography variant="caption" className={classes.slug}>{template.slug}</Typography> : null
                        }
                        <Typography>EMAIL</Typography>
                        <Box display="flex" flexDirection="column">
                            {
                                EMAIL_INPUT_CONFIG.map(config => (
                                    <Box my={2} key={config.name} width="100%">
                                        <FormControl fullWidth>
                                            <InputLabel>{config.label}</InputLabel>
                                            <Input name={config.name} value={config.value} onChange={config.handleChange} />
                                        </FormControl>
                                    </Box>
                                ))
                            }
                            <Box my={2} width="100%">
                                <Typography gutterBottom variant="caption">EMAIL BODY</Typography>
                                <ReactQuill ref={quillRef} className={classes.rte} value={template.templateData?.body || ''}
                                    onChange={handleRteChange} />
                            </Box>
                        </Box>
                    </Paper>
                </>
            ) : null}

            {template.channel === 'sms' ? (
                <Paper elevation={1} className={classes.container} {...dialogProps.formContainerProps}>
                    <Typography>SMS</Typography>
                    <Box display="flex" flexDirection="column">
                        {
                            SMS_INPUT_CONFIG.map(config => (
                                <Box my={2} key={config.name} width="100%">
                                    <FormControl fullWidth>
                                        <InputLabel>{config.label}</InputLabel>
                                        <Input name={config.name} value={config.value} onChange={config.handleChange} />
                                    </FormControl>
                                </Box>
                            ))
                        }

                    </Box>
                </Paper>
            ) : null}
            {props.fields ? (
                <Paper className={classes.bodyFields} elevation={1}>
                    <BodyFields onClick={handleInsertValue} fields={props.fields || []} />
                </Paper>
            ) : null}
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        margin: '16px 0px',
        position: 'relative',
        padding: '30px 20px'
    },
    slug: {
        padding: '2px 4px',
        position: 'absolute',
        right: 0,
        top: 0,
        border: `1px solid ${theme.palette.primary.main}`
    },
    rte: {
        '& .ql-container': {
            minHeight: 160
        }
    },
    typeLabel: {
        '& span': {
            background: theme.palette.primary.main,
            color: 'white',
            padding: '0px 2px',
            margin: '0px 2px'
        }
    },
    bodyFields: {
        padding: '20px 10px',
        position: 'fixed',
        right: 10,
        top: 100,
        minWidth: 180,

    }
}))

export default Form