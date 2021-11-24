import React, { FC } from 'react';
import { Box, Button, FormControlLabel, IconButton, Switch, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Template, TemplateTypeField } from '../../types';

export interface AttachmentFieldsProps {
    fields: TemplateTypeField[];
    onClick: (field: string) => void;
    dynamicAttachments: Template['dynamicAttachments'];
}

const AttachmentFields: FC<AttachmentFieldsProps> = (props) => {
    const classes = useStyles();
    const { dynamicAttachments = {} } = props;
    const handleClick = (value: string) => () => {
        props.onClick(value);
    };

    return (
        <Box className={classes.root}>
            <Box ml={1}>
                <Typography variant="caption">
                    <b>INSERT ATTACHMENTS</b>
                </Typography>
            </Box>
            {props.fields.map((f, i) => (
                <Box display="flex" alignItems="center" justifyContent="space-between" key={i} className={classes.fieldItem}>
                    <Button onClick={handleClick(f.value)} variant="text" color="primary">
                        &lt;{f.value}&gt;
                    </Button>
                    <Box width="20px" />

                    <Switch
                        color="primary"
                        checked={dynamicAttachments[f.value] || false}
                        className={classes.iconButton}
                        onChange={handleClick(f.value)}
                    />

                    {/* <Button onClick={handleClick(f.value)} variant="text" color="primary">
                        &lt;{f.value}&gt;
                    </Button>
                    <Box width="20px" /> */}
                </Box>
            ))}
        </Box>
    );
};

const useStyles = makeStyles<Theme>((theme) => {
    return createStyles({
        fieldItem: {
            '& button > span': {
                fontSize: 12,
            },
        },
        iconButton: {
            padding: 10,
            '& i': {
                fontSize: '20px',
            },
        },
        itemLabel: {
            width: '100%',
            justifyContent: 'space-between',
            '& > *': {
                fontWeight: theme.typography.fontWeightBold,
            },
        },
    });
});

export default AttachmentFields;
