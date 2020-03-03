import React from 'react'
import {
    // createStyles, makeStyles, Theme,
    Typography
} from '@material-ui/core'
import { useParams } from 'react-router';

interface IProps { }

const EditTemplate: React.FC<IProps> = () => {
    const { id } = useParams<{ id: string }>();
    // const classes = useStyles(props)

    return (
        <div>
            <Typography>ID: {id}</Typography>
        </div>
    )
}

// const useStyles = makeStyles((theme: Theme) => createStyles({

// }))

export default EditTemplate