import React, { FC } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { AllTemplates, Preview } from './components';
import { getPath } from './utils';
import { ContextProvider } from './Context';
import { Box, makeStyles, createStyles } from '@material-ui/core';
import { config } from './Config';

interface ITemplateRouterProps extends RouteComponentProps {

}

export const TemplateRouter: FC<ITemplateRouterProps> = () => {
    const classes = useStyles()
    return (
        <ContextProvider>
            <Box className={classes.root} {...config.rootContainerProps}>
                <Switch>
                    <Route exact path={getPath(':id')} component={Preview} />
                    <Route exact path={getPath('')} component={AllTemplates} />
                </Switch>
            </Box>
        </ContextProvider>
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