import React from 'react'
import { Theme, Paper, Box, Typography, Avatar, Input, IconButton, FormControl } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ReactQuill from 'react-quill'
import { SettingFormKey, TemplateFooterSetting } from '../types'

interface FooterFormProps {
    onChange: (key: SettingFormKey, value: any) => void
    settings: TemplateFooterSetting
}

const FooterForm: React.FC<FooterFormProps> = (props) => {
    const { onChange, settings } = props;
    const classes = useStyles()


    const handleRteChange = (content: string) => onChange('body', content)
    const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let _links = [...settings.links];
        if (_links[index])
            _links[index] = { ..._links[index], link: e.target.value }
        else
            _links.push({ link: e.target.value })
        onChange('links', _links)
    }

    const handleLinkRemove = (index: number) => () => {
        onChange('links', settings.links.filter((_, i) => index !== i))
    }

    return (
        <Paper>
            <Box p={3}>
                <Box my={2} width="100%">
                    <Typography gutterBottom variant="caption">FOOTER TEXT</Typography>
                    <ReactQuill className={classes.rte} value={settings.body || ''}
                        onChange={handleRteChange} />
                </Box>
                <Box my={2}>
                    <Typography gutterBottom variant="caption">SOCIAL MEDIA URL’s IN FOOTER</Typography>
                    {settings.links.map((l, i) => (
                        <Box key={i} display="flex" alignItems="center" width="100%">
                            <Box mr={1}>upload</Box>
                            <FormControl fullWidth>
                                <Input value={l.link || ''} onChange={handleChange(i)} endAdornment={<IconButton onClick={handleLinkRemove(i)}><i className="material-icons">close</i></IconButton>} />
                            </FormControl>
                        </Box>
                    ))}
                    <Box display="flex" alignItems="center" width="100%">
                        <Box mr={1}>upload</Box>
                        <FormControl fullWidth>
                            <Input value={''} onChange={handleChange(settings.links.length)} />
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    rte: {
        '& .ql-container': {
            minHeight: 160
        }
    },
}))

export default FooterForm