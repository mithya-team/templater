import React, { useContext, useEffect, useState } from 'react'
import {
    // createStyles, makeStyles, Theme,
    Typography, Box
} from '@material-ui/core'
import { Template } from '../../..';
import { config } from '../../Config';
import { useTemplateService } from '../../hooks';

interface ITemplatePreviewProps {
    id: string
}

const TemplatePreview: React.FC<ITemplatePreviewProps> = (props) => {
    const { getTemplateById } = useTemplateService();
    const [template, setTemplate] = useState<Template | undefined>()
    const { id } = props;


    useEffect(() => {
        if (!!config.apiConfig.baseUrl && !!config.apiConfig.accessToken && id)
            init()

    }, [config.apiConfig, id])
    // const classes = useStyles(props)

    const init = async () => {
        try {
            const _template = await getTemplateById(id);
            setTemplate(_template)
        } catch (error) {

        }
    }


    return (
        <Box minWidth="500px">
            {
                template?.channel === 'email' ?
                    <div dangerouslySetInnerHTML={{ __html: template?.templateData?.html || '' }} /> : null
            }
            {
                template?.channel === 'sms' ?
                    <Box p={2}>
                        <Typography>{template?.templateData?.body || ''}</Typography>
                    </Box> : null
            }
        </Box>
    )
}

// const useStyles = makeStyles((theme: Theme) => createStyles({

// }))

export default TemplatePreview