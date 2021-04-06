import React, { useContext } from 'react'
import { createStyles, makeStyles, Box, AppBar } from '@material-ui/core'
import TemplateList from './TemplateList'
import { Fab } from '@material-ui/core'
import { Context } from '../../Context'
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { getPath } from '../../utils'
import Settings from '../../components/Settings/index';

interface IProps { }

const AllTemplates: React.FC<IProps> = () => {
    const context = useContext(Context);
    if (!context) return <div />
    const { openTemplateEditor } = context;
    const classes = useStyles()



    return (
        <Box py={4}>
            <TemplateList />
            <div className={classes.fabContainer}>
                <Fab onClick={() => openTemplateEditor()}>
                    <i className="material-icons">add</i>
                </Fab>
            </div>
        </Box>
    )
}

const useStyles = makeStyles(() => createStyles({

    fabContainer: {
        position: 'fixed',
        right: 30,
        bottom: 30
    }
}))

export default AllTemplates