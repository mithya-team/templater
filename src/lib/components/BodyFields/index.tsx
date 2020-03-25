import React from 'react'
import { createStyles, makeStyles, Theme, Box, Typography } from '@material-ui/core'
import { TemplateTypeField } from '../../types'

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

    return (
        <div>
            {fields.map((f, i) => (
                <Box display="flex" flexDirection="column" alignItems="center" my={1} p={2} key={i} className={classes.fieldItem} onClick={handleClick(f.value)}>
                    <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption" color="textSecondary">{f.value}</Typography>
                        <Typography variant="caption" color={f.isRequired ? "primary" : "textSecondary"}>{f.isRequired ? "Required field" : "Not required"}</Typography>
                    </Box>
                    <Typography variant="body2">{f.description}</Typography>
                </Box>
            ))}
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    fieldItem: {
        cursor: 'pointer'
    }
}))

export default BodyFields