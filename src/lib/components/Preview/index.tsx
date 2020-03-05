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

interface IProps { }

const Preview: React.FC<IProps> = () => {
    const context = useContext(Context);
    if (!context) return <div />
    const { getTemplateById } = context;
    const [template, setTemplate] = useState<Template | undefined>()

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
                <div dangerouslySetInnerHTML={{ __html: template?.email.html || '' }} />
            </Box>
            <TestTemplate template={template} />
        </Box>
    )
}

// const useStyles = makeStyles((theme: Theme) => createStyles({

// }))

export default Preview