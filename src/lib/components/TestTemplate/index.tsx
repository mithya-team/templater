import React, { useState, useContext } from 'react'
import { createStyles, makeStyles, Theme, Typography, Box, Select, MenuItem, InputLabel, FormControl, Input, IconButton, Paper, Button, CircularProgress } from '@material-ui/core'
import { Template, TemplateContentType } from '../../types'
import EmailConfig from './EmailConfig';
import SmsConfig from './SmsConfig';
import { Context } from '../../Context';

export interface ITestTemplateProps {
    template: Template
    type: TemplateContentType
    onTypeChange: (type: TemplateContentType) => void
}

const TestTemplate: React.FC<ITestTemplateProps> = (props) => {
    const context = useContext(Context);
    if (!context) return <div />
    const { testTemplate } = context;
    const [loading, setLoading] = useState(false);
    const { template, type = 'email', onTypeChange = () => null } = props;
    const classes = useStyles(props)
    const [to, setTo] = useState('')
    const [phoneNumbers, setPhoneNumbers] = useState<string[]>([])
    const [cc, setCc] = useState<string[]>([])

    const TEMPLATE_TYP_OPTIONS: { label: string, value: TemplateContentType }[] = [
        { label: 'Email', value: 'email' },
        { label: 'SMS', value: 'sms' },
    ]

    const validateInput = () => {
        if (type === 'email' && !to) return false;
        // if (cc.filter(_c => !!_c).length === 0) return false;
        return true;
    }


    const send = async () => {
        setLoading(true)
        await testTemplate(template.id, type, { to, cc })
        setLoading(false)
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
                            onChange={e => onTypeChange(e.target.value as TemplateContentType)}
                        >
                            {
                                TEMPLATE_TYP_OPTIONS.map(o => (
                                    <MenuItem value={o.value} key={o.value}>{o.label}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <Box mt="40px">
                        {
                            type === 'email' ?
                                <EmailConfig to={to} cc={cc} onCcChange={_cc => setCc(_cc)} onToChange={_to => setTo(_to)} />
                                :
                                <SmsConfig phoneNumbers={phoneNumbers} onPhoneNumberChange={_numbers => setPhoneNumbers(_numbers)} />
                        }
                    </Box>
                    <Box mt={2}>
                        <Button onClick={send} disabled={!validateInput()} variant="outlined" color="secondary">
                            {loading ? <CircularProgress /> : 'Send'}
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