import React from 'react';
import { Template, TemplateContentType } from '../../types';
export interface ITestTemplateProps {
    template: Template;
    type: TemplateContentType;
    onTypeChange: (type: TemplateContentType) => void;
}
declare const TestTemplate: React.FC<ITestTemplateProps>;
export default TestTemplate;
