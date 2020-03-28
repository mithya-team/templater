import React from 'react';
import { config } from "./Config"
import Axios from 'axios';
import { TPicture } from "..";


export const getPath = (suffix: string) => {
    return suffix ? config.urlPrefix + '/' + suffix : config.urlPrefix;
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

export const copyLink = (url: string) => {
    const el = document.createElement('textarea');
    el.value = url
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

export const trimHTML = (html: string) => {
    return html.replace(/<p><br><\/p>/ig, '');
}

export const unescapeHTML = (html: string) => {
    return html.replace(/&lt;/ig, '<').replace(/&gt;/ig, '>');
}


export const generateHTML = (body: string, banner?: TPicture, footer?: any) => {

    const BANNER = banner ? `<tr><td><img src="${banner.url}" style="width: 500px; height: 250px; object-fit: cover; border-radius: 4px 4px 0px 0px" /></td></tr>` : ''
    const BODY = `<tr><td><div style="padding: 20px 24px;">${unescapeHTML(trimHTML(body))}</div></td></tr>`;

    const createTable = (content: string) => {
        return `<table style="width: 500px; margin: 0 auto;  box-shadow: 0px 3px 6px rgba(0,0,0,0.2); border-radius: 4px; background-color: white; font-family: sans-serif" cellPadding="0px" cellSpacing="0px">${content}</table>`
    }

    return wrapWithHTML(createTable(BANNER + BODY))
}

const wrapWithHTML = (body: string) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html 
    xmlns=3D"http://www.w3.org/1999/xhtml" 
    xmlns=3D"http://www.w3.org/1999/xhtml" 
    style=3D"height: 100% !important; width: 100% !important; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; padding: 0;"
>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
  <!--[if mso]>
    <style>
      * {
        font-family: sans-serif !important;
      }
    </style>
<![endif] -->
    <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
    <!--[if !mso]><!-->
    <!-- insert web font reference, eg: <link href=3D'https://fonts.googleapis.com/css?family=3DRoboto:400,700' rel=3D'stylesheet' type=3D'text/css'> -->
    <!--<![endif]-->

    <!-- Web Font / @font-face : END -->

    <!-- CSS Reset -->
    <style type=3D"text/css">

      /* What it does: Remove spaces around the email design added by some email clients. */
      /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
      html,
      body {
        Margin: 0 !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
      }

      /* What it does: Stops email clients resizing small text. */
      * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      /* What it does: Forces Outlook.com to display emails full width. */
      .ExternalClass {
        width: 100%;
      }

      /* What it does: Centers email on Android 4.4 */
      div[style*=3D"margin: 16px 0"] {
        margin:0 !important;
      }

      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
      }

      /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
      table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        table-layout: fixed !important;
        Margin: 0 auto !important;
      }
      table table table {
        table-layout: auto;
      }

      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
        -ms-interpolation-mode:bicubic;
      }

      h1 {
        font-size: 24px;
        color: #2d2d2d;
      }

      p {
        color:       #2d2d2d;
        line-height: 26px;
        font-size:   16px;

      }

      a {
        color: #423bd8;
        text-decoration: none;
        font-weight: bold;
      }

      /* What it does: Overrides styles added when Yahoo's auto-senses a link. */
      .yshortcuts a {
        border-bottom: none !important;
      }

      /* What it does: A work-around for iOS meddling in triggered links. */
      .mobile-link--footer a,
      a[x-apple-data-detectors] {
        color:inherit !important;
        text-decoration: underline !important;
      }

    </style>

    <!-- Progressive Enhancements -->
    <style>

      /* What it does: Hover styles for buttons */
      .button-td,
      .button-a {
        transition: all 100ms ease-in;
      }
      .button-td:hover,
      .button-a:hover {
        background: #4675DC !important;
        border-color: #4675DC !important;
      }

      /* Media Queries */
      @media screen and (max-width: 480px) {
        /* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
        .fluid,
        .fluid-centered {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          Margin-left: auto !important;
          Margin-right: auto !important;
        }
        /* And center justify these ones. */
        .fluid-centered {
          Margin-left: auto !important;
          Margin-right: auto !important;
        }

        /* What it does: Forces table cells into full-width rows. */
        .stack-column,
        .stack-column-center {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
          direction: ltr !important;
        }
        /* And center justify these ones. */
        .stack-column-center {
          text-align: center !important;
        }

        /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
        

      }

</style>

<style>
  body {
    margin: 0 !important; 
    padding: 0 !important; height: 100% !important; 
    width: 100% !important;
}
.ExternalClass {
    width: 100%;
}
img {
    -ms-interpolation-mode: bicubic;
}
</style>
</head>
<body>
<div style="background-color: #F5F5F5; padding: 20px 0px;">
${body}
</div></body>
</html>
`.replace(/(\n)/ig, '')