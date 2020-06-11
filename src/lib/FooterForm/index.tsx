import React, { useState, useEffect, createRef } from 'react'
import { Theme, Paper, Box, Typography, Avatar, Input, IconButton, FormControl, Icon } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ReactQuill from 'react-quill'
import { SettingFormKey, TemplateSetting, TPicture, TemplateTypeField } from '../types'
import SingleImageUpload from '../Form/ImageUpload'
import { QUILL_FORMATS, QUILL_MODULES_ALT, getQuillModule } from '../Config'
import { BodyFields } from '../components'
import QuillToolbar from '../QuillToolbar';

interface FooterFormProps {
    onChange: (key: SettingFormKey, value: any) => void
    setting: Partial<TemplateSetting>
    fields?: TemplateTypeField[]
    variableContainerClass?: any
    onLinkCopy?: (link: string) => void
}


let curQuillInputIndex = 0;


const FooterForm: React.FC<FooterFormProps> = (props) => {
    const { onChange, setting = {} } = props;
    const classes = useStyles()
    const [loading, setLoading] = useState(false);
    const quillRef = createRef<ReactQuill>();

    useEffect(() => {
        if (!quillRef.current) return;
        const editor = quillRef.current.getEditor();
        editor.on('editor-change', () => {
            const selection = editor.getSelection();
            if (selection) curQuillInputIndex = selection.index;
        })

        var customButton = document.querySelector<HTMLInputElement>('#color')
        if (customButton)
            customButton.addEventListener('change', (e: any) => {
                editor.format('color', e.target?.value);
            })
        // editor.format('align', 'center')

    }, [quillRef])

    useEffect(() => {
        const _links = [...setting?.settingData?.links || []];
        if (_links.length === 0) {
            onChange('links', [{ link: '' }])
        }
    }, [])
    const onImagesSelected = (file: any) => {
        setLoading(true)
    }

    const handleRteChange = (content: string) => onChange('body', content)

    const newMediaData = () => {
        const _links = [...setting?.settingData?.links || []];
        onChange('links', [..._links, { link: '' }])
    }

    const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let _links = [...setting?.settingData?.links || []];
        if (_links[index])
            _links[index] = { ..._links[index], link: e.target.value }
        // else
        //     _links.push({ link: e.target.value })
        onChange('links', _links)
    }

    const onImageUploadComplete = (index: number) => (current: any, response: TPicture) => {
        let _links = [...setting?.settingData?.links || []];
        if (_links[index])
            _links[index] = { ..._links[index], icon: response }
        // else
        //     _links.push({ icon: response, link: '' })
        onChange('links', _links)
        setLoading(false);
    }

    const handleInsertValue = (value: string) => {
        const valueToBeAppended = `<%= ${value} %>`;
        if (!quillRef.current) return;
        const editor = quillRef.current.getEditor();
        editor.insertText(curQuillInputIndex, valueToBeAppended);

        if (props.onLinkCopy)
            props.onLinkCopy(valueToBeAppended)

    }

    const handleLinkRemove = (index: number) => () => {
        onChange('links', setting?.settingData?.links.filter((_, i) => index !== i) || [])
    }

    const linksLength = setting.settingData?.links?.length || 0;

    return (
        <Paper>
            <Box p={3}>
                <Box my={2} width="100%">
                    <Typography gutterBottom variant="caption">FOOTER TEXT</Typography>
                    <QuillToolbar id="ql-footer-toolbar" />
                    <ReactQuill
                        ref={quillRef}
                        formats={QUILL_FORMATS}
                        modules={getQuillModule('ql-footer-toolbar')}
                        className={classes.rte}
                        value={setting.settingData?.body || ''}
                        onChange={handleRteChange}
                    />
                </Box>
                <Box my={2}>
                    <Typography gutterBottom variant="caption">SOCIAL MEDIA URL’s IN FOOTER</Typography>
                    {setting.settingData?.links?.map((l, i) => (
                        <Box key={i} my={1} display="flex" alignItems="center" width="100%">
                            <Box mr={1} position="relative">
                                <SingleImageUpload
                                    placeholderText=" "
                                    avatar={true}
                                    mini={true}
                                    dimension={{ width: '30px', height: '30px' }}
                                    folderName={'template'}
                                    imageUrl={setting?.settingData?.links[i]?.icon?.url || ''}
                                    loading={loading}
                                    onImageSelected={onImagesSelected}
                                    onImageUploadComplete={onImageUploadComplete(i)}
                                />
                            </Box>
                            <FormControl fullWidth>
                                <Input value={l.link || ''} onChange={handleChange(i)} endAdornment={<IconButton onClick={handleLinkRemove(i)}><i className="material-icons">close</i></IconButton>} />
                            </FormControl>
                        </Box>
                    ))}

                    <Box my={1} display="flex" alignItems="center" width="100%">
                        <IconButton size="small" onClick={newMediaData}>
                            <Icon>add</Icon>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            {props.fields ? (
                <Paper className={props.variableContainerClass || classes.bodyFields} elevation={1}>
                    <BodyFields onClick={handleInsertValue} fields={props.fields || []} />
                </Paper>
            ) : null}
        </Paper>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    rte: {
        '& .ql-editor': {
            minHeight: 160
        }
    },
    bodyFields: {
        padding: '20px 10px',
        position: 'fixed',
        right: 10,
        top: 100,
        minWidth: 180,

    }
}))

export default FooterForm