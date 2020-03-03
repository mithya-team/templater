import React, { useContext } from 'react'
import { createStyles, makeStyles, Paper, Typography, Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { Template } from '../../..';
import { getPath } from '../../utils';
import { Context } from '../../Context';

interface IProps {
    data: Template
}

const TemplateCard: React.FC<IProps> = (props) => {
    const context = useContext(Context);
    if (!context) return <div />
    const { openTemplateEditor } = context;
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
            <Button color="primary" onClick={() => openTemplateEditor(data)} variant="contained">EDIT</Button>
        </Paper>
    )
}

const useStyles = makeStyles(() => createStyles({
    root: {
        padding: 8
    }
}))

export default TemplateCard