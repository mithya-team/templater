import React, { FC, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography, CircularProgress, IconButton, Icon, Button, Link } from '@material-ui/core';
import FileInput from './FileInput';
import { TemplateTypeField } from '../types';

export interface AttachmentsProps {
    attachments?: any[];
    handleAddAttchment: (attachments: any[]) => Promise<void>;
    onRemoveAttachment?: (id: string) => Promise<void>;
    selectedAttachmentFields: TemplateTypeField[] | undefined;
    onRemoveDynamicAttachment?: (id: string) => void;
}

const Attachments: FC<AttachmentsProps> = (props) => {
    const classes = useStyles();
    const { attachments = [], selectedAttachmentFields = [], onRemoveDynamicAttachment } = props;
    const [loading, setLoading] = useState(false);

    const handleDone = async (files: any[]) => {
        setLoading(true);
        try {
            await props.handleAddAttchment(files);
        } catch (error) {}
        setLoading(false);
    };

    const handleRemove = (id: string) => async () => {
        if (!props.onRemoveAttachment) return;
        try {
            await props.onRemoveAttachment(id);
        } catch (error) {}
    };

    return (
        <Box>
            {loading ? (
                <CircularProgress />
            ) : (
                <Box position="relative" width="min-content">
                    <label htmlFor="attachment-upload">
                        <IconButton size="small">
                            <Icon>attach_email</Icon>
                        </IconButton>
                    </label>
                    <FileInput id="attachment-upload" accept="*" encodeToBase64={false} multiple={true} onDone={handleDone} />
                </Box>
            )}
            <Box display="flex" flexDirection="column">
                {attachments.map((a) => (
                    <Box display="flex" width="100%" justifyContent="space-between" alignItems="center" my={2}>
                        <Link target="_blank" href={a.url}>
                            attachment {a.name}
                        </Link>
                        <IconButton onClick={handleRemove(a.id)} size="small">
                            <Icon>close</Icon>
                        </IconButton>
                    </Box>
                ))}
                {selectedAttachmentFields.map((a) => (
                    <Box display="flex" width="100%" justifyContent="space-between" alignItems="center" my={2}>
                        <Typography color="primary">{a.description}</Typography>
                        <IconButton onClick={() => onRemoveDynamicAttachment?.(a.value)} size="small">
                            <Icon>close</Icon>
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

const useStyles = makeStyles<Theme, any>((theme) => ({}));

export default Attachments;
