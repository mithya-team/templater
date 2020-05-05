import React, { useContext } from 'react'
import { createStyles, makeStyles, Paper, Typography, Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { Template } from '../../..';
import { getPath } from '../../utils';
import { Context } from '../../Context';

interface ITemplateCardProps {
    data: Template
    redirectUrl?: string
    actions?: JSX.Element
}

const TemplateCard: React.FC<ITemplateCardProps> = (props) => {
    const { data, redirectUrl, actions = (<div />) } = props;
    const classes = useStyles()


    const CUSTOM = '<sup>*</sup>custom'
    const AUTO = '<sup>*</sup>auto triggered'

    return (
        <Paper className={classes.root}>
            <Box p={2} borderRadius="4px">
                <div className={classes.tags}>
                    <Typography variant="caption" dangerouslySetInnerHTML={{ __html: data.flow === 'defaultFlow' ? CUSTOM : AUTO }}></Typography>
                </div>
                <Link to={redirectUrl || '#'}>
                    <Box pl={1} display="flex" justifyContent="space-between">
                        <Typography>{data.name}</Typography>
                    </Box>
                </Link>
                <Box display="flex">
                    {actions}
                </Box>
            </Box>
        </Paper>
    )
}

const useStyles = makeStyles(() => createStyles({
    img: {
        borderRadius: '4px 4px 0px 0px',
        width: '100%'
    },
    root: {
        position: 'relative'
    },
    tags: {
        position: 'absolute',
        top: 4,
        right: 4
    }
}))

export default TemplateCard