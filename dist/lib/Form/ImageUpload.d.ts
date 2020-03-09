/// <reference types="react" />
interface IProps<T = unknown> {
    onImageSelected?: (files: any[]) => void;
    dimension?: {
        width: string;
        height: string;
    };
    folderName?: string;
    placeholderText?: string;
    loading?: boolean;
    imageUrl?: string;
    onImageUploadComplete?: (current: any, response: T) => void;
}
declare function SingleImageUpload<T extends any>(props: IProps<T>): JSX.Element;
export default SingleImageUpload;
