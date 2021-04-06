import React, { useContext, useEffect, useState } from 'react'
import {
    // createStyles, makeStyles, Theme,
    Typography, Box
} from '@material-ui/core'
import { Template } from '../../..';
import { config } from '../../Config';
import { useTemplateService } from '../../hooks';

interface ITemplatePreviewProps {
    template?: Template
}

const TemplatePreview: React.FC<ITemplatePreviewProps> = (props) => {
    const { template } = props;



    if (!template) return <div />

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