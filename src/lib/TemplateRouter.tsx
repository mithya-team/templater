import React, { FC } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { AllTemplates, Preview } from './components';
import { getPath } from './utils';
import { ContextProvider } from './Context';

interface ITemplateRouterProps extends RouteComponentProps {

}

export const TemplateRouter: FC<ITemplateRouterProps> = () => {
    return (
        <ContextProvider>
            <Switch>
                <Route exact path={getPath(':id')} component={Preview} />
                <Route exact path={getPath('')} component={AllTemplates} />
            </Switch>
        </ContextProvider>
    )
}

export default withRouter(TemplateRouter);