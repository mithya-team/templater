import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface IProps extends RouteComponentProps {
    tabValue: number;
    onTabChange: (tab: number) => void;
}
declare const _default: React.ComponentClass<Pick<IProps, "tabValue" | "onTabChange">, any> & import("react-router").WithRouterStatics<React.FC<IProps>>;
export default _default;
