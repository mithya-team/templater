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
            {/* {
                imgUrl ? <img src={imgUrl} className={classes.img} /> : null
            } */}
            <Box borderRadius="4px" style={{ backgroundSize: 'cover', backgroundImage: imgUrl ? `url(${imgUrl})` : undefined }}>
                <Box p={2} borderRadius="4px" style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255,255,255,0.3)' }}>
                    <Link to={getPath(data.id)}>
                        <Box>
                            <Box display="flex" justifyContent="space-between">
                                <Typography>{data.name}</Typography>
                                <Typography variant="caption" color="textSecondary" >{data.slug}</Typography>
                            </Box>
                            <Typography color="textSecondary">{data.email?.subject || ''}</Typography>
                        </Box>
                    </Link>
                    <Box display="flex">
                        <Box flex={1} />
                        <Button color="primary" onClick={() => openTemplateEditor(data)} variant="text">EDIT</Button>
                    </Box>
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