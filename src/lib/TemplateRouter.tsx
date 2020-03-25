import React, { FC, useState, useEffect } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { Preview, Settings } from './components';
import { AllTemplates } from './screens';
import { getPath } from './utils';
import { ContextProvider } from './Context';
import { Box, makeStyles, createStyles, useTheme, MuiThemeProvider } from '@material-ui/core';
import { config } from './Config';
import MainTabs from './screens/MainTabs';

interface ITemplateRouterProps extends RouteComponentProps {

}

const TAB_ROUTE_MAPPING = [
    '',
    'settings'
]

export const TemplateRouter: FC<ITemplateRouterProps> = (props) => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);

    useEffect(() => {
        props.history.push(getPath(TAB_ROUTE_MAPPING[tabValue] || ''))
    }, [tabValue])

    return (
        // <MuiThemeProvider theme={config.theme}>
        <ContextProvider>
            <Box className={classes.root} {...config.rootContainerProps}>
                <MainTabs tabValue={tabValue} onTabChange={setTabValue} />
                <Switch>
                    <Route exact path={getPath('settings')} component={Settings} />
                    <Route exact path={getPath(':id')} component={Preview} />
                    <Route exact path={getPath('')} component={AllTemplates} />
                </Switch>
            </Box>
        </ContextProvider>
        // </MuiThemeProvider>
    )
}


const useStyles = makeStyles(() => createStyles({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto'
    }
}))


export default withRouter(TemplateRouter);