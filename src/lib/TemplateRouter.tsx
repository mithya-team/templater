import React, { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AllTemplates, EditTemplate } from './components';
import { getPath } from './utils';

export const TemplateRouter: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={getPath('')} component={AllTemplates} />
                <Route exact path={getPath(':id')} component={EditTemplate} />
            </Switch>
        </BrowserRouter>
    )
}

export default TemplateRouter;