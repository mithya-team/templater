import React, { Component } from 'react';
interface IProps {
    onDone: (files: any[]) => void;
    multiple?: boolean;
    disabled?: boolean;
    style?: any;
    accept: string;
}
export default class FileInput extends Component<IProps> {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
