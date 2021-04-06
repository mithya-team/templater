import React from 'react'
import { createStyles, makeStyles, Theme, Box, Typography, IconButton, Button } from '@material-ui/core'
import { TemplateTypeField } from '../../types'
import { copyLink } from '../../utils'

interface IProps {
    fields: TemplateTypeField[]
    onClick: (field: string) => void
}

const BodyFields: React.FC<IProps> = (props) => {
    const classes = useStyles(props)
    const { fields } = props;

    const handleClick = (value: string) => () => {
        props.onClick(value);
    }

    const handleCopyLink = (str: string) => () => {
        copyLink(`<%= ${str} %>`)
    }

    return (
        <div className={classes.root}>
            <Box ml={1}>
                <Typography variant="caption"><b>INSERT VARIABLE</b></Typography>
            </Box>
            {fields.map((f, i) => (
                <Box display="flex" alignItems="center" justifyContent="space-between" key={i} className={classes.fieldItem} >
                    <Button onClick={handleClick(f.value)} variant="text" color="primary">
                        &lt;{f.value}&gt;
                    </Button>
                    <Box width="20px" />
                    <IconButton className={classes.iconButton} onClick={handleCopyLink(f.value)}>
                        <i className="material-icons">file_copy</i>
                    </IconButton>
                </Box>
            ))}
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxHeight: '100vh',
        overflow: 'scroll',
    },
    fieldItem: {
        cursor: 'pointer',
        '& button > span': {
            fontSize: 12
        },
    },
    iconButton: {
        padding: 10,
        '& i': {
            fontSize: '20px'
        }

    }
}))

export default BodyFields