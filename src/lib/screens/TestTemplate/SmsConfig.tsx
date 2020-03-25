import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles, Theme, Box, Typography, Input, IconButton } from '@material-ui/core'

interface IProps {
    phoneNumbers?: string[]
    onPhoneNumberChange: (numbers: string[]) => void;
}

const SmsConfig: React.FC<IProps> = (props) => {
    const [numbers, setNumbers] = useState(props.phoneNumbers || [])
    const classes = useStyles(props)

    useEffect(() => {
        props.onPhoneNumberChange(numbers)
    }, [numbers])




    return (
        <Box>
            <Typography gutterBottom>Configure SMS</Typography>
            <Box display="flex" flexDirection="column">
                <Box my={2}>
                    <Typography>to: </Typography>
                    <Box display="flex" flexDirection="column">
                        {
                            numbers.map((number, i) => (
                                <Box my={1} key={i} display="flex" width="100%">
                                    <Input placeholder="+918800000000" fullWidth value={numbers[i] || ''} onChange={e => {
                                        setNumbers([...numbers.map((_, _i) => i === _i ? e.target.value : _)])
                                    }} />
                                    <IconButton style={{ padding: 0 }} onClick={() => setNumbers([...numbers.filter((_, _i) => i !== _i)])}>
                                        <i className="material-icons">clear</i>
                                    </IconButton>
                                </Box>
                            ))
                        }
                        <Box width="50px" my={1} height="50px">
                            <IconButton onClick={() => setNumbers([...numbers, ''])}>
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

export default SmsConfig