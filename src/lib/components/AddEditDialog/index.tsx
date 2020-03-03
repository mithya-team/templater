import React, { useContext, useState } from 'react'
import {
    createStyles, makeStyles,
    Dialog, Box, AppBar, Toolbar, Typography, Button, CircularProgress
} from '@material-ui/core'
import { Context } from '../../Context';
import Form from '../../Form';
import { config } from '../../Config';
import { Template } from '../../types';

interface IProps { }

export type FormKey = 'name' | 'subject' | 'body'
const AddEditDialog: React.FC<IProps> = () => {
    const context = useContext(Context);
    if (!context) return <div />
    const {
        dialogOpen,
        closeDialog,
        status,
        selectedTemplate
    } = context;
    const [template, setTemplate] = useState<Partial<Template>>(selectedTemplate ?? {})

    const classes = useStyles()

    const handleChange = (key: FormKey, value: string) => {
        if (key === 'name')
            setTemplate({ ...template, [key]: value });
        else
            setTemplate({ ...template, email: { ...(template.email || { body: '', html: '', subject: '' }), [key]: value } })
    }

    const handleSubmit = () => {
        console.log("is new?", !!template.id)
        console.log("submitting", template)
    }

    return selectedTemplate ? (
        <Dialog open={dialogOpen} PaperProps={{ className: classes.root }} onClose={closeDialog} fullScreen>
            <AppBar  {...config.dialogToolbarProps}>
                <Toolbar >
                    <Box>
                        <Typography>Edit template: {selectedTemplate.name}</Typography>
                    </Box>
                    <Box flex={1} />
                    <Box>
                        <Button onClick={closeDialog}>Cancel</Button>
                        <Button onClick={handleSubmit} variant="contained" color="primary">
                            {
                                status === 'loading' ? <CircularProgress /> : 'Submit'
                            }
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box margin="100px auto" p="20px" width="600px">
                <Form
                    template={selectedTemplate}
                    onChange={handleChange}
                />
            </Box>
        </Dialog>
    ) : null
}

const useStyles = makeStyles(() => createStyles({
    root: {
        backgroundColor: '#F5F5F5'
    }
}))

export default AddEditDialog