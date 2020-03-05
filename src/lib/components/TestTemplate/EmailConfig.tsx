import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles, Theme, Box, Typography, Input, IconButton } from '@material-ui/core'

interface IProps {
    to?: string
    cc?: string[]
    onToChange: (to: string) => void;
    onCcChange: (cc: string[]) => void;
}

const EmailConfig: React.FC<IProps> = (props) => {
    const [to, setTo] = useState(props.to || '')
    const [cc, setCc] = useState<string[]>(props.cc || [])
    const classes = useStyles(props)

    useEffect(() => {
        props.onToChange(to)
    }, [to])

    useEffect(() => {
        props.onCcChange(cc)
    }, [cc])


    return (
        <Box>
            <Typography gutterBottom>Configure email</Typography>
            <Box display="flex" flexDirection="column">
                <Box my={2}>
                    <Typography>To: </Typography>
                    <Box width="100%">
                        <Input value={to} fullWidth onChange={e => setTo(e.target.value)} />
                    </Box>
                </Box>
                <Box my={2}>
                    <Typography>CC: </Typography>
                    <Box display="flex" flexDirection="column">
                        {
                            cc.map((_cc, i) => (
                                <Box my={1} key={i} display="flex" width="100%">
                                    <Input fullWidth value={cc[i] || ''} onChange={e => {
                                        setCc([...cc.map((_, _i) => i === _i ? e.target.value : _)])
                                    }} />
                                    <IconButton style={{ padding: 0 }} onClick={() => setCc([...cc.filter((_, _i) => i !== _i)])}>
                                        <i className="material-icons">clear</i>
                                    </IconButton>
                                </Box>
                            ))
                        }
                        <Box width="50px" my={1} height="50px">
                            <IconButton onClick={() => setCc([...cc, ''])}>
                                <i className="material-icons">add</i>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({

}))

export default EmailConfig