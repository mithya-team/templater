import React from 'react';
import { Template } from '../../..';
interface ITemplateCardProps {
    data: Template;
    badgeHTML?: string;
    redirectUrl?: string;
    actions?: JSX.Element;
}
declare const TemplateCard: React.FC<ITemplateCardProps>;
export default TemplateCard;
