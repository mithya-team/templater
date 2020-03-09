import { TPicture } from "..";
export declare const getPath: (suffix: string) => string;
export declare const uploadPicture: (file: any, imagesFolder: string) => Promise<import("axios").AxiosResponse<any>>;
export declare const generateHTML: (body: string, banner?: TPicture | undefined, footer?: any) => string;
