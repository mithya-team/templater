import React from 'react'
// import { createStyles, makeStyles } from '@material-ui/core'
import { Template } from '../types';
import { FormKey } from '../components/AddEditDialog';

interface IProps {
    template: Template
    onChange: (key: FormKey, value: string) => void
}

const Form: React.FC<IProps> = (props) => {
    const { template } = props;
    // const classes = useStyles(props)

    return (
        <div>
            FORM
            ----
            image
            ----
            {template.name}
        </div>
    )
}

// const useStyles = makeStyles(() => createStyles({

// }))

export default Form