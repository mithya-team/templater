/// <reference types="react" />
interface IProps<T = unknown> {
    onImageSelected?: (files: any[]) => void;
    dimension?: {
        width?: string;
        height?: string;
        minHeight?: string;
    };
    avatar?: boolean;
    mini?: boolean;
    folderName?: string;
    placeholderText?: string;
    loading?: boolean;
    imageUrl?: string;
    onImageUploadComplete?: (current: any, response: T) => void;
    disabled?: boolean;
}
declare function SingleImageUpload<T extends any>(props: IProps<T>): JSX.Element;
export default SingleImageUpload;
