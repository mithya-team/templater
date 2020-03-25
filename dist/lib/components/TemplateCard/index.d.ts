import React from 'react';
import { Template } from '../../..';
interface ITemplateCardProps {
    data: Template;
    redirectUrl?: string;
    actions?: JSX.Element;
}
declare const TemplateCard: React.FC<ITemplateCardProps>;
export default TemplateCard;
