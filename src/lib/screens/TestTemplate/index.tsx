import React, { useState, useContext } from 'react'
import { createStyles, makeStyles, Theme, Typography, Box, Select, MenuItem, InputLabel, FormControl, Input, IconButton, Paper, Button, CircularProgress } from '@material-ui/core'
import { Template } from '../../types'
import EmailConfig from './EmailConfig';
import SmsConfig from './SmsConfig';
import { Context } from '../../Context';

export interface ITestTemplateProps {
    template: Template
    // onTypeChange: (type: TemplateContentType) => void
}

const TestTemplate: React.FC<ITestTemplateProps> = (props) => {
    const context = useContext(Context);
    if (!context) return <div />
    const { testTemplate } = context;
    const [loading, setLoading] = useState(false);
    const { template } = props;
    const classes = useStyles(props)
    const [to, setTo] = useState('')
    const [phoneNumbers, setPhoneNumbers] = useState<string[]>([])
    const [cc, setCc] = useState<string[]>([])



    const validateInput = () => {
        if (template.channel === 'email' && !to) return false;
        // if (cc.filter(_c => !!_c).length === 0) return false;
        return true;
    }


    const send = async () => {
        setLoading(true)
        await testTemplate(template.id, template.channel, { to, cc })
        setLoading(false)
    }


    if (!template) return <div />

    return (
        <Paper>
            <Box p={3} width="300px">
                <Typography variant="h6">Test template - {template.name}</Typography>
                <Typography className={classes.tag} variant="caption">{template.slug}</Typography>
                <Box mt="20px">
                    <Box mt="40px">
                        {template.channel === 'email' ? (

                            <EmailConfig to={to} cc={cc} onCcChange={_cc => setCc(_cc)} onToChange={_to => setTo(_to)} />
                        ) : null}
                        {template.channel === 'sms' ? (
                            <SmsConfig phoneNumbers={phoneNumbers} onPhoneNumberChange={_numbers => setPhoneNumbers(_numbers)} />
                        ) : null}
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