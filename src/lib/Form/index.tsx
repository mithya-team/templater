import React, { useState } from 'react'
import { createStyles, makeStyles, FormControl, InputLabel, Input, Box, Typography, Theme } from '@material-ui/core'
import { Template, TPicture } from '../types';
import { FormKey } from '../components/AddEditDialog';
import { Paper } from '@material-ui/core';
import { config } from '../Config';
import ReactQuill from 'react-quill'
import SingleImageUpload from './ImageUpload';


interface IProps {
    template: Partial<Template>
    onChange: (key: FormKey, value: any) => void
}

const Form: React.FC<IProps> = (props) => {
    const { template, onChange } = props;
    const [loading, setLoading] = useState(false);
    const { dialogProps } = config
    const classes = useStyles(props)

    const onImagesSelected = (file: any) => {
        setLoading(true)
    }

    const onImageUploadComplete = (current: any, response: TPicture) => {
        console.log("upload completed", response);
        onChange('banner', response)
        setLoading(false);
    }

    const handleRteChange = (content: string) => onChange('body', content)


    const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.name as FormKey, e.target.value);
    }

    const EMAIL_INPUT_CONFIG: { label: string, name: FormKey, value: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }[] = [
        { label: 'EMAIL NAME (internal purpose only)', name: 'name', value: template.name || '', handleChange: _handleChange },
        { label: 'EMAIL SUBJECT', name: 'subject', value: template.email?.subject || '', handleChange: _handleChange },
    ]

    const SMS_INPUT_CONFIG: { label: string, name: FormKey, value: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }[] = [
        { label: 'SMS BODY', name: 'smsBody', value: template.sms?.body || '', handleChange: _handleChange },
    ]

    return (
        <div>
            <Box mb={5} position="relative">
                <SingleImageUpload
                    placeholderText="600 x 250"
                    dimension={{ width: '600px', height: '250px' }}
                    folderName={'template'}
                    imageUrl={template?.email?.banner?.url}
                    loading={loading}
                    onImageSelected={onImagesSelected}
                    onImageUploadComplete={onImageUploadComplete}
                />
            </Box>
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
                        <ReactQuill className={classes.rte} value={template.email?.body || ''}
                            onChange={handleRteChange} />
                    </Box>
                </Box>
            </Paper>

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
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
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
    }
}))

export default Form