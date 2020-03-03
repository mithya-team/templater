import React from 'react';
import { config } from '../../Config';
interface IProps {
    listingType?: typeof config['listingType'];
}
declare const TemplateList: React.FC<IProps>;
export default TemplateList;
