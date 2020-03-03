import React, { useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import TemplateList from './TemplateList'
import { Fab } from '@material-ui/core'
import { Context } from '../../Context'

interface IProps { }

const AllTemplates: React.FC<IProps> = () => {
    const context = useContext(Context);
    if (!context) return <div />
    const { openTemplateEditor } = context;
    const classes = useStyles()

    return (
        <div>
            <TemplateList />
            <div className={classes.fabContainer}>
                <Fab onClick={() => openTemplateEditor()}>
                    <i className="material-icons">add</i>
                </Fab>
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => createStyles({
    fabContainer: {
        position: 'absolute',
        right: 30,
        bottom: 30
    }
}))

export default AllTemplates