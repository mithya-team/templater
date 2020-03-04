import React, { useState } from 'react'
import { createStyles, makeStyles, FormControl, InputLabel, Input, Box, Typography } from '@material-ui/core'
import { Template, TPicture } from '../types';
import { FormKey } from '../components/AddEditDialog';
import { Paper } from '@material-ui/core';
import { config } from '../Config';
import ReactQuill from 'react-quill'
import SingleImageUpload from './ImageUpload';


interface IProps {
    template: Partial<Template>
    onChange: (key: FormKey, value: string) => void
}

const Form: React.FC<IProps> = (props) => {
    const { template, onChange } = props;
    const [loading, setLoading] = useState(false);
    const [headerImage, setHeaderImage] = useState<TPicture | undefined>()
    const { dialogProps } = config
    const classes = useStyles(props)

    const onImagesSelected = (file: any) => {
        setLoading(true)
    }

    const onImageUploadComplete = (current: any, response: TPicture) => {
        console.log("upload completed", response);
        setHeaderImage(response);
        setLoading(false);
    }

    const handleRteChange = (content: string) => onChange('body', content)


    const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.name as FormKey, e.target.value);
    }

    const INPUT_CONFIG: { label: string, name: FormKey, value: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }[] = [
        { label: 'EMAIL NAME (internal purpose only)', name: 'name', value: template.name || '', handleChange: _handleChange },
        { label: 'EMAIL SUBJECT', name: 'subject', value: template.email?.subject || '', handleChange: _handleChange },
    ]

    return (
        <>
            <Box mb={5} position="relative">
                <SingleImageUpload
                    placeholderText="600 x 250"
                    dimension={{ width: '600px', height: '250px' }}
                    folderName={'template'}
                    imageUrl={headerImage?.url}
                    loading={loading}
                    onImageSelected={onImagesSelected}
                    onImageUploadComplete={onImageUploadComplete}
                />
            </Box>
            <Paper elevation={1} className={classes.root} {...dialogProps.formContainerProps}>
                <Box display="flex" flexDirection="column">
                    {
                        INPUT_CONFIG.map(config => (
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
        </>
    )
}

const useStyles = makeStyles(() => createStyles({
    root: {
        padding: '30px 20px'
    },
    rte: {
        '& .ql-container': {
            minHeight: 300
        }
    }
}))

export default Form