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

    const imgUrl = data.email?.banner?.url

    return (
        <Paper>
            {
                imgUrl ? <img src={imgUrl} className={classes.img} /> : null
            }
            <Box p={2} >
                <Link to={getPath(data.id)}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography>{data.name}</Typography>
                        <Typography variant="caption" color="textSecondary" >{data.slug}</Typography>
                    </Box>
                </Link>
                <Typography color="textSecondary">{data.email?.subject || ''}</Typography>
                <Button color="primary" onClick={() => openTemplateEditor(data)} variant="contained">EDIT</Button>
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