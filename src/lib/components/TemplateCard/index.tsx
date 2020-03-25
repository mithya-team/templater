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


    return (
        <Paper>
            <Box p={2} borderRadius="4px">
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
    }
}))

export default TemplateCard