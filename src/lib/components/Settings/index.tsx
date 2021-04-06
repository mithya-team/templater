import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

interface IProps { }

const Settings: React.FC<IProps> = (props) => {

    const classes = useStyles(props)

    return (
        <div>
            Settings
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({

}))

export default Settings