import React, { useContext, useEffect, useState } from 'react'
import {
    // createStyles, makeStyles, Theme,
    Typography, Box, Chip, Tooltip, Button
} from '@material-ui/core'
import { useParams } from 'react-router';
import { Context } from '../../Context';
import { Template } from '../../..';
import { config } from '../../Config';
import TestTemplate from '../TestTemplate';
import { TemplateContentType } from '../../types';

interface IProps { }

const Preview: React.FC<IProps> = () => {
    const context = useContext(Context);
    if (!context) return <div />
    const { getTemplateById } = context;
    const [template, setTemplate] = useState<Template | undefined>()
    const [testType, setTestType] = useState<TemplateContentType>('email');

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!!config.baseUrl && !!config.accessToken)
            init()

    }, [config.baseUrl, config.accessToken])
    // const classes = useStyles(props)

    const init = async () => {
        try {
            const _template = await getTemplateById(id);
            setTemplate(_template)
        } catch (error) {

        }
    }


    return (
        <Box m="30px auto" width="900px" display="flex" justifyContent="space-around">
            <Box minWidth="500px">
                {
                    testType === 'email' ?
                        <div dangerouslySetInnerHTML={{ __html: template?.email.html || '' }} /> : null
                }
                {
                    testType === 'sms' ?
                        <Box p={2}>
                            <Typography>{template?.sms?.body || ''}</Typography>
                        </Box> : null
                }
            </Box>
            {
                template ?
                    <TestTemplate template={template} type={testType} onTypeChange={type => setTestType(type)} />
                    : null
            }
        </Box>
    )
}

// const useStyles = makeStyles((theme: Theme) => createStyles({

// }))

export default Preview