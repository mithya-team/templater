import React, { FC } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { AllTemplates, EditTemplate } from './components';
import { getPath } from './utils';

interface ITemplateRouterProps extends RouteComponentProps {

}

export const TemplateRouter: FC<ITemplateRouterProps> = () => {
    return (
        <Switch>
            <Route exact path={getPath(':id')} component={EditTemplate} />
            <Route path={getPath('')} component={AllTemplates} />
        </Switch>
    )
}

export default withRouter(TemplateRouter);