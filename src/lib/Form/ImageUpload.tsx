import React from 'react'
import { createStyles, makeStyles, Theme, useTheme, Box, Fab, Typography, CircularProgress } from '@material-ui/core';
import loadImage from 'blueimp-load-image'
import FileInput from './FileInput';
import { uploadPicture } from '../utils'
import { Paper } from '@material-ui/core';

interface IProps<T = unknown> {
    onImageSelected?: (files: any[]) => void
    dimension?: {
        width: string,
        height: string
    }
    folderName?: string
    placeholderText?: string
    loading?: boolean
    imageUrl?: string
    onImageUploadComplete?: (current: any, response: T) => void
}

function SingleImageUpload<T extends any>(props: IProps<T>) {

    const theme = useTheme<Theme>()
    const classes = useStyles(props)

    const { dimension = { width: '100%', height: '250px' }, placeholderText = '' } = props

    const uploadFiles = async (files: any[]) => {

        if (!files || files.length === 0 || typeof props.onImageSelected !== 'function')
            return;
        const file = files[0];
        props.onImageSelected(file);

        const filePromises = files.map((file, index) => {
            return new Promise((resolve, reject) => {
                loadImage(file.base64, (img: any, data: any) => {
                    console.log('Data', data);
                    const base64 = img.getAttribute('src');
                    resolve(file);
                }, { meta: undefined });
            })
        });

        Promise.all(filePromises).then(
            async (newFiles) => {
                const res = await uploadPicture(newFiles[0], props.folderName || 'all');
                if (props.onImageUploadComplete)
                    props.onImageUploadComplete(newFiles[0], res.data);
            }
        )
    }


    return props.loading ? <Typography align="center"><CircularProgress /> </Typography> : (
        <Paper square>
            {
                props.imageUrl ?
                    <img src={props.imageUrl} width={dimension.width} height={dimension.height} className={classes.image} /> :
                    <div style={{ width: dimension.width, height: dimension.height }} className={classes.imagePlaceholder} />
            }

            <div className={classes.buttonContainer} style={{ top: !!props.imageUrl ? undefined : '50%' }}>
                {
                    !props.imageUrl ?
                        <>
                            <Typography variant="body2">ADD IMAGE</Typography>
                            <Typography variant="body2">{placeholderText}</Typography>
                        </> : null
                }
                <Fab size="small" color="primary" className={classes.uploadBtn}>
                    <i className="material-icons">camera_alt</i>
                    <FileInput
                        accept="image/*"
                        multiple={false}
                        onDone={uploadFiles}
                    />
                </Fab>
            </div>

        </Paper>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    image: {
        display: 'block',
        // height: '250px',
        objectFit: 'cover'
    },
    imagePlaceholder: {
        // width: '250px',
        // height: '250px',
        background: 'white',
    },
    buttonContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    uploadBtn: {
        position: 'relative',
    }
}))

export default SingleImageUpload