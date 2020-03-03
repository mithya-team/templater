import React from 'react'
import { createStyles, makeStyles, Paper, Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { Template } from '../../..';
import { getPath } from '../../utils';

interface IProps {
    data: Template
}

const TemplateCard: React.FC<IProps> = (props) => {
    const { data } = props;
    const classes = useStyles()



    return (
        <Paper className={classes.root}>
            <Link to={getPath(data.id)}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">{data.name}</Typography>
                    <Typography variant="caption">{data.slug}</Typography>
                </Box>
            </Link>
            <Typography>{data.id}</Typography>
        </Paper>
    )
}

const useStyles = makeStyles(() => createStyles({
    root: {
        padding: 8
    }
}))

export default TemplateCard