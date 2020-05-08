import React from 'react';
declare type ToolbarOption = 'size' | 'color' | 'image' | 'align';
interface QuillToolbarProps {
    id: string;
    toolbarOptions?: ToolbarOption[];
}
declare const QuillToolbar: React.FC<QuillToolbarProps>;
export default QuillToolbar;
