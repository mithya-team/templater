import React from 'react'
// import { createStyles, makeStyles, Theme } from '@material-ui/core'
import TemplateList from './TemplateList'

interface IProps { }

const AllTemplates: React.FC<IProps> = () => {

    // const classes = useStyles(props)

    return (
        <div>
            <TemplateList />
        </div>
    )
}

// const useStyles = makeStyles((theme: Theme) => createStyles({

// }))

export default AllTemplates