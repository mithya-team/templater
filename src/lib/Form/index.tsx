import React, { useState } from 'react'
import { createStyles, makeStyles, FormControl, InputLabel, Input, Box, Typography } from '@material-ui/core'
import { Template } from '../types';
import { FormKey } from '../components/AddEditDialog';
import { Paper } from '@material-ui/core';
import { config } from '../Config';
import ReactQuill from 'react-quill'


interface IProps {
    template: Partial<Template>
    onChange: (key: FormKey, value: string) => void
}

const Form: React.FC<IProps> = (props) => {
    const { template, onChange } = props;
    const { dialogProps } = config
    const classes = useStyles(props)


    const handleRteChange = (content: string) => {
        console.log("change", content)
        onChange('body', content)
    }

    const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.name as FormKey, e.target.value);
    }

    const INPUT_CONFIG: { label: string, name: FormKey, value: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }[] = [
        { label: 'EMAIL NAME (internal purpose only)', name: 'name', value: template.name || '', handleChange: _handleChange },
        { label: 'EMAIL SUBJECT', name: 'subject', value: template.email?.subject || '', handleChange: _handleChange },
    ]

    return (
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