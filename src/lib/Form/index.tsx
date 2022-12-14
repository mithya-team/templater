import React, { useState, createRef, useEffect, useMemo } from 'react';
import {
    createStyles,
    makeStyles,
    FormControl,
    InputLabel,
    Box,
    Typography,
    Theme,
    IconButton,
    Icon,
    Select,
    MenuItem,
    TextField,
} from '@material-ui/core';
import { Template, TPicture, TemplateTypeField, FormKey } from '../types';
import { Paper } from '@material-ui/core';
import { config, QUILL_MODULES, QUILL_FORMATS, getQuillModule } from '../Config';
import ReactQuill from 'react-quill';
import SingleImageUpload from './ImageUpload';
import BodyFields from '../components/BodyFields';
import QuillToolbar from '../QuillToolbar';
import clsx from 'clsx';
import Attachments from './Attachments';
import AttachmentFields from '../components/AttachmentFields';

const DEFAULT_FLOW = 'defaultFlow';
export interface IFormProps {
    fields?: TemplateTypeField[];
    template: Partial<Template>;
    // flows: string[]
    classes?: { bodyFieldsContainer: any };
    errors?: Record<string, any>;
    flows: Array<{ name: string; value: string }>;
    onLinkCopy?: (link: string) => void;
    onAddAttachments?: (files: any[]) => Promise<void>;
    onRemoveAttachment?: (id: string) => Promise<void>;
    onChange: (key: FormKey, value: any) => void;
}

let curQuillInputIndex = 0;
const Form: React.FC<IFormProps> = (props) => {
    const { template, onChange, fields, flows = [], errors = {} } = props;
    const [loading, setLoading] = useState(false);
    const { dialogProps } = config;
    const [step, setStep] = useState<1 | 2>(1);
    const classes = useStyles(props);
    const quillRef = createRef<ReactQuill>();

    const onImagesSelected = (file: any) => {
        setLoading(true);
    };

    useEffect(() => {
        if (template.flow && template.flow !== '' && step === 1) setStep(2);
        else if (config.singleInstances && !template.flow) {
            props.onChange('flow', DEFAULT_FLOW);
        }
    }, [template]);

    useEffect(() => {
        if (!quillRef.current) return;
        const editor = quillRef.current.getEditor();
        editor.on('editor-change', () => {
            const selection = editor.getSelection();
            if (selection) curQuillInputIndex = selection.index;
        });

        var customButton = document.querySelector<HTMLInputElement>('#color');
        if (customButton)
            customButton.addEventListener('change', (e: any) => {
                editor.format('color', e.target?.value);
            });
    }, [quillRef]);

    const onImageUploadComplete = (current: any, response: TPicture) => {
        onChange('banner', response);
        setLoading(false);
    };

    const handleRteChange = (content: string) => onChange('body', content);

    const _handleSenderChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange('from', {
            ...template.templateData?.from,
            [name]: e.target.value,
        });
    };

    const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        if (name === 'cc' || name === 'bcc')
            onChange(
                name,
                value.split(',').map((v) => v.trim())
            );
        else onChange(name as FormKey, value);
    };

    const handleInsertValue = (value: string) => {
        const valueToBeAppended = `<%= ${value} %>`;
        if (!quillRef.current) return;
        const editor = quillRef.current.getEditor();
        editor.insertText(curQuillInputIndex, valueToBeAppended);

        if (props.onLinkCopy) props.onLinkCopy(valueToBeAppended);
    };

    const _i = flows.findIndex((f) => f.value === template.flow);
    const templateName =
        config.singleInstances && template.flow !== DEFAULT_FLOW && _i > -1 ? flows[_i].name || '-TemplateName' : template.name || '';

    let EMAIL_INPUT_CONFIG: {
        required?: boolean;
        label: string;
        name: FormKey;
        multiline?: boolean;
        value: string;
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }[] = [
        {
            label: 'TEMPLATE NAME (internal purpose only)',
            required: true,
            name: 'name',
            value: templateName,
            handleChange: _handleChange,
        },
        {
            label: 'SENDER EMAIL',
            name: 'senderEmail',
            required: true,
            value: template.templateData?.from?.email || '',
            handleChange: _handleSenderChange('email'),
        },
        {
            label: 'SENDER NAME',
            name: 'senderName',
            value: template.templateData?.from?.name || '',
            handleChange: _handleSenderChange('name'),
        },
        {
            label: 'CC EMAIL TO',
            name: 'cc',
            multiline: true,
            value: template.templateData?.cc?.join(', ') || '',
            handleChange: _handleChange,
        },
        {
            label: 'BCC EMAIL TO',
            name: 'bcc',
            multiline: true,
            value: template.templateData?.bcc?.join(', ') || '',
            handleChange: _handleChange,
        },
        {
            label: 'EMAIL SUBJECT',
            required: true,
            name: 'subject',
            value: template.templateData?.subject || '',
            handleChange: _handleChange,
        },
    ];

    EMAIL_INPUT_CONFIG = EMAIL_INPUT_CONFIG.filter((f) => (config.singleInstances && template.flow !== DEFAULT_FLOW ? f.name !== 'name' : true));

    const SMS_INPUT_CONFIG: {
        label: string;
        name: FormKey;
        value: string;
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }[] = [
        {
            label: 'SMS BODY',
            name: 'body',
            value: template.templateData?.body || '',
            handleChange: _handleChange,
        },
    ];

    const getLabel = (flow?: string) => {
        if (!flow) return '';
        const _i = flows.findIndex((f) => f.value === flow);
        if (_i > -1) return flows[_i].name;
        else return flow;
    };

    const FLOWS = config.singleInstances ? flows.filter((f) => f.value === DEFAULT_FLOW) : flows;
    const textFields = useMemo(() => {
        return props.fields?.filter((i) => !i.type);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.fields?.length]);
    const attachmentFields = useMemo(() => {
        return props.fields?.filter((i) => i.type === 'attachment');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.fields?.length]);

    const handleDynamicAttachmentChange = (key: string) => {
        const { dynamicAttachments = {} } = template;
        onChange('dynamicAttachments', { ...dynamicAttachments, [key]: !dynamicAttachments[key] });
    };

    return (
        <div>
            <Paper>
                <Box p={3} display="flex" alignItems="center">
                    {step === 1 ? (
                        <FormControl fullWidth>
                            <InputLabel>Select {template.channel} type</InputLabel>
                            <Select name="flow" value={template.flow || ''} onChange={_handleChange}>
                                {/* {config.singleInstances ? null : (
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                )} */}
                                {FLOWS.map((flow) => (
                                    <MenuItem key={flow.value} value={flow.value}>
                                        {flow.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : (
                        <Box display="flex" alignItems="center">
                            {config.singleInstances ? null : (
                                <IconButton onClick={() => setStep(1)}>
                                    <Icon>keyboard_arrow_left</Icon>
                                </IconButton>
                            )}
                            <Typography className={classes.typeLabel}>
                                Template type <span>{getLabel(template.flow)}</span>
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Paper>

            {props.template.channel === 'email' ? (
                <>
                    <Box my={3} position="relative">
                        <SingleImageUpload
                            placeholderText=" "
                            dimension={{ minHeight: '150px', width: '100%' }}
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
                        {template.slug ? (
                            <Typography variant="caption" className={classes.slug}>
                                {template.slug}
                            </Typography>
                        ) : null}
                        <Box display="flex" flexDirection="column">
                            {EMAIL_INPUT_CONFIG.map((config, i) => (
                                <Box my={2} key={config.name + i} width="100%">
                                    <FormControl fullWidth>
                                        <TextField
                                            error={!!errors[config.name]}
                                            label={config.label}
                                            required={config.required}
                                            multiline={config.multiline || false}
                                            name={config.name}
                                            value={config.value}
                                            onChange={config.handleChange}
                                        />
                                    </FormControl>
                                </Box>
                            ))}
                            <Box my={2} width="100%">
                                <Typography gutterBottom variant="caption">
                                    EMAIL BODY
                                </Typography>
                                <QuillToolbar id="toolbar-ql" />
                                <ReactQuill
                                    formats={QUILL_FORMATS}
                                    modules={getQuillModule('toolbar-ql')}
                                    ref={quillRef}
                                    className={classes.rte}
                                    value={template.templateData?.body || ''}
                                    onChange={handleRteChange}
                                />
                            </Box>
                            {props.onAddAttachments ? (
                                <Box my={2} width="100%" alignItems="center">
                                    <Typography gutterBottom variant="caption">
                                        ATTACHMENTS
                                    </Typography>
                                    <Attachments
                                        onRemoveAttachment={props.onRemoveAttachment}
                                        attachments={template._attachments || []}
                                        handleAddAttchment={props.onAddAttachments}
                                        onRemoveDynamicAttachment={handleDynamicAttachmentChange}
                                        selectedAttachmentFields={attachmentFields?.filter((i) => !!template?.dynamicAttachments?.[i.value])}
                                    />
                                </Box>
                            ) : null}
                        </Box>
                    </Paper>
                </>
            ) : null}

            {template.channel === 'sms' ? (
                <Paper elevation={1} className={classes.container} {...dialogProps.formContainerProps}>
                    <Typography>SMS</Typography>
                    <Box display="flex" flexDirection="column">
                        {SMS_INPUT_CONFIG.map((config) => (
                            <Box my={2} key={config.name} width="100%">
                                <FormControl fullWidth>
                                    <TextField label={config.label} name={config.name} value={config.value} onChange={config.handleChange} />
                                </FormControl>
                            </Box>
                        ))}
                    </Box>
                </Paper>
            ) : null}
            {props.fields ? (
                <Paper className={clsx(classes.bodyFields, props.classes?.bodyFieldsContainer)} elevation={1}>
                    <BodyFields onClick={handleInsertValue} fields={textFields || []} />
                    <AttachmentFields
                        onClick={handleDynamicAttachmentChange}
                        dynamicAttachments={template.dynamicAttachments}
                        fields={attachmentFields || []}
                    />
                </Paper>
            ) : null}
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: '16px 0px',
            position: 'relative',
            padding: '30px 20px',
        },
        slug: {
            padding: '2px 4px',
            position: 'absolute',
            right: 0,
            top: 0,
            border: `1px solid ${theme.palette.primary.main}`,
        },
        rte: {
            '& .ql-editor': {
                minHeight: 160,
            },
        },
        typeLabel: {
            '& span': {
                background: theme.palette.primary.main,
                color: 'white',
                padding: '0px 2px',
                margin: '0px 2px',
            },
        },
        bodyFieldsContainer: {},
        bodyFields: {
            padding: '20px 10px',
            position: 'fixed',
            right: 10,
            top: 100,
            minWidth: 180,
            bottom: 0,
            overflow: 'auto',
        },
    })
);

export default Form;
