import React, { Component } from 'react';


interface IProps {
    onDone: (files: any[]) => void
    multiple?: boolean
    disabled?: boolean
    style?: any
    accept: string
}

const FILE_UPLOAD_BUTTON_STYLES = {
    fileInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
        zIndex: 5
    }
}

export default class FileInput extends Component<IProps> {

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files = e.target.files || []
        if (files.length === 0) return;

        let allFiles: any[] = [];

        Array.from(files).forEach(file => {
            let reader = new FileReader();
            reader.onload = event => {
                let fileInfo = {
                    name: file.name,
                    type: file.type,
                    size: Math.round(file.size / 1000) + ' kB',
                    base64: reader.result,
                    file: file,
                };
                allFiles.push(fileInfo);
                if (allFiles.length === (files && files.length)) {
                    // console.log('All files', allFiles);
                    if (typeof this.props.onDone === 'function')
                        this.props.onDone(allFiles);
                }
            }
            reader.readAsDataURL(file);
        });
        // console.log('File INput', files);

    }
    render() {
        const { multiple = false, disabled = false, style = {} } = this.props;

        return (
            <input
                type="file"
                onChange={this.handleChange}
                multiple={multiple}
                accept={this.props.accept}
                style={{ ...this.props.style, ...FILE_UPLOAD_BUTTON_STYLES.fileInput }}
                disabled={disabled}
            />
        )
    }
}
