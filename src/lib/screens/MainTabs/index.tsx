import React from 'react'
import { createStyles, makeStyles, Theme, AppBar, Toolbar, Box, Tabs, Tab } from '@material-ui/core'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { getPath } from '../../utils';
import { config } from '../../Config';



interface IProps extends RouteComponentProps {
    tabValue: number
    onTabChange: (tab: number) => void
}


const ENABLED_TABS_ROUTES = ['', 'settings'];

const shoudShowTabs = (pathname: string) =>
    ENABLED_TABS_ROUTES.map(r => getPath(r)).indexOf(pathname) > -1;


const MainTabs: React.FC<IProps> = (props) => {

    const classes = useStyles(props)

    if (!shoudShowTabs(props.location.pathname) || config.disableTabs)
        return <div />

    return (
        <AppBar position="sticky">
            <Toolbar className={classes.toolbar}>
                <Box flex={1} />
                <Tabs value={props.tabValue} onChange={(_, tab) => props.onTabChange(tab)}>
                    <Tab label="All" />
                    <Tab label="Settings" />
                </Tabs>
                <Box flex={1} />
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
        minHeight: 48
    }
}))

export default withRouter(MainTabs)