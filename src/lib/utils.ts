import { config } from "./Config"
import Axios from 'axios';


export const getPath = (suffix: string) => {
    return config.urlPrefix + '/' + suffix;
}


const IMAGE_UPLOAD_URL = 'pictures/upload';

export const uploadPicture = (file: any, imagesFolder: string) => {
    if (!file.base64)
        return Promise.reject('Could not find base64 encoding of file');
    imagesFolder = imagesFolder || 'images';
    if (!(/\/$/.test(imagesFolder)))
        imagesFolder += '/';
    return Axios.request({
        url: IMAGE_UPLOAD_URL,
        method: 'POST',
        data: {
            base64img: file.base64,
            filename: file.name,
            folder: imagesFolder
        }
    });
}