import { TPicture } from "..";
export declare const getPath: (suffix: string) => string;
export declare const uploadPicture: (file: any, imagesFolder: string) => Promise<import("axios").AxiosResponse<any>>;
export declare const copyLink: (url: string) => void;
export declare const trimHTML: (html: string) => string;
export declare const unescapeHTML: (html: string) => string;
export declare const generateHTML: (body: string, banner?: TPicture | undefined, footer?: any) => string;
export declare const mergeInlineStyle: (str: string) => string;
export declare const getFooterHTML: (content: string, links: {
    icon?: TPicture | undefined;
    link: string;
}[]) => string;
