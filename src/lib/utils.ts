import React from 'react';
import { config } from "./Config"
import Axios from 'axios';
import { TPicture } from "..";


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



export const generateHTML = (body: string, banner?: TPicture, footer?: any) => {

    const BANNER = banner ? `<tr><td><img src="${banner.url}" style="width: 500px; height: 250px; object-fit: cover;" /></td></tr>` : ''
    const BODY = `<tr><td><div style="padding: 20px 24px;">${body}</div></td></tr>`;

    console.log("BANNER BODY", BANNER, BODY)

    const createTable = (content: string) => {
        return `<table style="width: 500px; background-color: white; font-family: sans-serif" cellPadding="0px" cellSpacing="0px">${content}</table>`
    }

    return createTable(BANNER + BODY)
}