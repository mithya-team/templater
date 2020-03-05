import React from 'react'
import { createStyles, makeStyles, Theme, AppBar, Toolbar, Box, Typography, Button, CircularProgress } from '@material-ui/core'
import { config } from '../../Config'

interface IProps {
    dialogTitle: string
    handleClose: () => void
    handleSubmit: () => void
    loading?: boolean
}

const DialogHeader: React.FC<IProps> = (props) => {
    const { dialogProps } = config;
    const { loading = false, handleClose, handleSubmit, dialogTitle } = props;

    const classes = useStyles(props)

    return (
        <AppBar {...dialogProps.toolbarProps}>
            <Toolbar >
                <Box>
                    <Typography>{dialogTitle}</Typography>
                </Box>
                <Box flex={1} />
                <Box display="flex" alignItems="center">
                    <Box mr={2}>
                        <Button {...dialogProps.secondaryActionButtonProps} onClick={handleClose}>Cancel</Button>
                    </Box>
                    <Button variant="contained" color="primary" {...dialogProps.mainActionButtonProps} onClick={handleSubmit} >
                        {
                            loading ? <CircularProgress /> : 'Submit'
                        }
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({

}))

export default DialogHeader