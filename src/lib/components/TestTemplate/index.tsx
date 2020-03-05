import React, { useState } from 'react'
import { createStyles, makeStyles, Theme, Typography, Box, Select, MenuItem, InputLabel, FormControl, Input, IconButton, Paper, Button } from '@material-ui/core'
import { Template, TemplateContentType } from '../../types'
import EmailConfig from './EmailConfig';

export interface ITestTemplateProps {
    template?: Template
}

const TestTemplate: React.FC<ITestTemplateProps> = (props) => {
    const { template } = props;
    const classes = useStyles(props)
    const [type, setType] = useState<TemplateContentType>('email');
    const [to, setTo] = useState('')
    const [cc, setCc] = useState<string[]>([])

    const TEMPLATE_TYP_OPTIONS = [
        { label: 'Email', value: 'email' },
        { label: 'SMS', value: 'sms' },
    ]

    const validateInput = () => {
        if (type === 'email' && !to) return false;
        // if (cc.filter(_c => !!_c).length === 0) return false;
        return true;
    }

    if (!template) return <div />

    return (
        <Paper>
            <Box p={3} width="300px">
                <Typography variant="h6">Test template - {template.name}</Typography>
                <Typography className={classes.tag} variant="caption">{template.slug}</Typography>
                <Box mt="20px">
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={type}
                            onChange={e => setType(e.target.value as TemplateContentType)}
                        >
                            {
                                TEMPLATE_TYP_OPTIONS.map(o => (
                                    <MenuItem value={o.value} key={o.value}>{o.label}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    {
                        type === 'email' ?
                            <Box mt="40px">
                                <EmailConfig to={to} cc={cc} onCcChange={_cc => setCc(_cc)} onToChange={_to => setTo(_to)} />
                            </Box>
                            : null
                    }
                    <Box mt={2}>
                        <Button disabled={!validateInput()} variant="outlined" color="secondary">
                            Send
                    </Button>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    tag: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        padding: '2px 4px'
    }
}))

export default TestTemplate