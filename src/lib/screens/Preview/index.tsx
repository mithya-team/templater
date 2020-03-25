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
import { TemplatePreview } from '../../components';

interface IProps { }

const Preview: React.FC<IProps> = () => {
    const context = useContext(Context);
    if (!context) return <div />
    const { getTemplateById } = context;
    const [template, setTemplate] = useState<Template | undefined>()

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!!config.apiConfig.baseUrl && !!config.apiConfig.accessToken)
            init()

    }, [config.apiConfig])
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
            <TemplatePreview id={template?.id || ''} />
            {
                template ?
                    <TestTemplate template={template} />
                    : null
            }
        </Box>
    )
}

// const useStyles = makeStyles((theme: Theme) => createStyles({

// }))

export default Preview