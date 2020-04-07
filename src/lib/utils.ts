import React from 'react';
import { config } from "./Config"
import Axios from 'axios';
import { TPicture, TemplateSetting } from "..";


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

  const BANNER = banner ? `<tr><td><img src="${banner.url}" style="width: 600px; height: 250px; object-fit: cover; border-radius: 4px 4px 0px 0px" /></td></tr>` : ''
  const BODY = `<tr><td><div style="padding: 20px 24px;">${unescapeHTML(trimHTML(body))}</div></td></tr>`;
  const FOOTER = `<tr><td><div style="padding:24px">${footer}</div></td></tr>`;

  const createTable = (content: string, footer: string = '') => {
    return `
      <table style="width: 600px; margin: 0 auto;  box-shadow: 0px 3px 6px rgba(0,0,0,0.2); border-radius: 4px; background-color: white; font-family: sans-serif" cellPadding="0px" cellSpacing="0px">
      <tbody>
      ${content}
      </tbody>
      </table>
      <table style="width: 600px; margin: 0 auto; font-family: sans-serif" cellPadding="0px" cellSpacing="0px">
      <tbody>
      ${footer}
      </tbody>
      </table>`.replace(/(\n)/ig, '')
  }

  return wrapWithHTML(createTable(BANNER + BODY, FOOTER))
}



export const getFooterHTML = (content: string, links: TemplateSetting['settingData']['links']) => {
  const BODY = content;
  const _links: string[] = []
  links.forEach(l => {
    _links.push(`
          <td>
              <a href="${l.link}" target="_blank">
              <img src="${l.icon?.url}" width="30px" height="30px" style="border-radius: 15px"/>
              </a>
          </td>
      `.replace(/(\n)/ig, ''))
  })

  const LINKS = `
      <table align="center">
          <tr>
              ${_links.join('')}
          </tr>
      </table>
      `.replace(/(\n)/ig, '')

  const HTML = `
      <table>
          <tr><td>${LINKS}</td></tr>
          <tr><td>${BODY}</td></tr>
      </table>
  `.replace(/(\n)/ig, '');

  return HTML
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
  <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"/>
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
        ${quillStyles}
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
  <div style="background-color: #F5F5F5; padding: 60px 0px;">
  ${body}
  </div></body>
  </html>
`.replace(/(\n)/ig, '')



const quillStyles = `
.ql-container {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 100%;
  margin: 0px;
  position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
  visibility: hidden;
}
.ql-container:not(.ql-disabled) li[data-list=checked] > .ql-ui,
.ql-container:not(.ql-disabled) li[data-list=unchecked] > .ql-ui {
  cursor: pointer;
}
.ql-clipboard {
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
}
.ql-clipboard p {
  margin: 0;
  padding: 0;
}
.ql-editor {
  box-sizing: border-box;
  counter-reset: list-0;
  line-height: 1.42;
  height: 100%;
  outline: none;
  overflow-y: auto;
  padding: 12px 15px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.ql-editor > * {
  cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
  margin: 0;
  padding: 0;
}
.ql-editor p,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
  counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor table {
  border-collapse: collapse;
}
.ql-editor td {
  border: 1px solid #000;
  padding: 2px 5px;
}
.ql-editor ol {
  padding-left: 1.5em;
}
.ql-editor li {
  list-style-type: none;
  padding-left: 1.5em;
  position: relative;
}
.ql-editor li > .ql-ui:before {
  display: inline-block;
  margin-left: -1.5em;
  margin-right: 0.3em;
  text-align: right;
  white-space: nowrap;
  width: 1.2em;
}
.ql-editor li[data-list=checked] > .ql-ui,
.ql-editor li[data-list=unchecked] > .ql-ui {
  color: #777;
}
.ql-editor li[data-list=bullet] > .ql-ui:before {
  content: '\2022';
}
.ql-editor li[data-list=checked] > .ql-ui:before {
  content: '\2611';
}
.ql-editor li[data-list=unchecked] > .ql-ui:before {
  content: '\2610';
}
.ql-editor li[data-list=ordered] {
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  counter-increment: list-0;
}
.ql-editor li[data-list=ordered] > .ql-ui:before {
  content: counter(list-0, decimal) '. ';
}
.ql-editor li[data-list=ordered].ql-indent-1 {
  counter-increment: list-1;
}
.ql-editor li[data-list=ordered].ql-indent-1 > .ql-ui:before {
  content: counter(list-1, lower-alpha) '. ';
}
.ql-editor li[data-list=ordered].ql-indent-1 {
  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor li[data-list=ordered].ql-indent-2 {
  counter-increment: list-2;
}
.ql-editor li[data-list=ordered].ql-indent-2 > .ql-ui:before {
  content: counter(list-2, lower-roman) '. ';
}
.ql-editor li[data-list=ordered].ql-indent-2 {
  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor li[data-list=ordered].ql-indent-3 {
  counter-increment: list-3;
}
.ql-editor li[data-list=ordered].ql-indent-3 > .ql-ui:before {
  content: counter(list-3, decimal) '. ';
}
.ql-editor li[data-list=ordered].ql-indent-3 {
  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor li[data-list=ordered].ql-indent-4 {
  counter-increment: list-4;
}
.ql-editor li[data-list=ordered].ql-indent-4 > .ql-ui:before {
  content: counter(list-4, lower-alpha) '. ';
}
.ql-editor li[data-list=ordered].ql-indent-4 {
  counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor li[data-list=ordered].ql-indent-5 {
  counter-increment: list-5;
}
.ql-editor li[data-list=ordered].ql-indent-5 > .ql-ui:before {
  content: counter(list-5, lower-roman) '. ';
}
.ql-editor li[data-list=ordered].ql-indent-5 {
  counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor li[data-list=ordered].ql-indent-6 {
  counter-increment: list-6;
}
.ql-editor li[data-list=ordered].ql-indent-6 > .ql-ui:before {
  content: counter(list-6, decimal) '. ';
}
.ql-editor li[data-list=ordered].ql-indent-6 {
  counter-reset: list-7 list-8 list-9;
}
.ql-editor li[data-list=ordered].ql-indent-7 {
  counter-increment: list-7;
}
.ql-editor li[data-list=ordered].ql-indent-7 > .ql-ui:before {
  content: counter(list-7, lower-alpha) '. ';
}
.ql-editor li[data-list=ordered].ql-indent-7 {
  counter-reset: list-8 list-9;
}
.ql-editor li[data-list=ordered].ql-indent-8 {
  counter-increment: list-8;
}
.ql-editor li[data-list=ordered].ql-indent-8 > .ql-ui:before {
  content: counter(list-8, lower-roman) '. ';
}
.ql-editor li[data-list=ordered].ql-indent-8 {
  counter-reset: list-9;
}
.ql-editor li[data-list=ordered].ql-indent-9 {
  counter-increment: list-9;
}
.ql-editor li[data-list=ordered].ql-indent-9 > .ql-ui:before {
  content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
.ql-editor li.ql-direction-rtl {
  padding-right: 1.5em;
}
.ql-editor li.ql-direction-rtl > .ql-ui:before {
  margin-left: 0.3em;
  margin-right: -1.5em;
  text-align: left;
}
.ql-editor table {
  table-layout: fixed;
  width: 100%;
}
.ql-editor table td {
  outline: none;
}
.ql-editor .ql-code-block-container {
  font-family: monospace;
}
.ql-editor .ql-video {
  display: block;
  max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
  margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
  background-color: #000;
}
.ql-editor .ql-bg-red {
  background-color: #e60000;
}
.ql-editor .ql-bg-orange {
  background-color: #f90;
}
.ql-editor .ql-bg-yellow {
  background-color: #ff0;
}
.ql-editor .ql-bg-green {
  background-color: #008a00;
}
.ql-editor .ql-bg-blue {
  background-color: #06c;
}
.ql-editor .ql-bg-purple {
  background-color: #93f;
}
.ql-editor .ql-color-white {
  color: #fff;
}
.ql-editor .ql-color-red {
  color: #e60000;
}
.ql-editor .ql-color-orange {
  color: #f90;
}
.ql-editor .ql-color-yellow {
  color: #ff0;
}
.ql-editor .ql-color-green {
  color: #008a00;
}
.ql-editor .ql-color-blue {
  color: #06c;
}
.ql-editor .ql-color-purple {
  color: #93f;
}
.ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
  font-size: 0.75em;
}
.ql-editor .ql-size-large {
  font-size: 1.5em;
}
.ql-editor .ql-size-huge {
  font-size: 2.5em;
}
.ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
.ql-editor .ql-ui {
  position: absolute;
}
.ql-editor.ql-blank::before {
  color: rgba(0,0,0,0.6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
}
`.replace(/(\n)/ig, '');