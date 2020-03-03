import React, { useContext } from 'react'
import {
    // createStyles, makeStyles, Theme, 
    Box, LinearProgress,
} from '@material-ui/core'
import { config } from '../../Config';
import TemplateCard from './TemplateCard';
import { Context } from '../../Context';

interface IProps {
    listingType?: typeof config['listingType']
}

const TemplateList: React.FC<IProps> = () => {
    // const { listingType = templaterConfig.listingType } = props;
    // const classes = useStyles(props);
    const context = useContext(Context);
    if (!context) return <div />

    const { templates, status } = context;

    return (
        <Box >
            {
                status === 'loading' ? <LinearProgress color="primary" /> :
                    templates.map((t, i) => (
                        <Box margin="10px auto" key={t.id + i} width="500px">
                            <TemplateCard data={t} />
                        </Box>
                    ))


            }
        </Box>
    )
}

// const useStyles = makeStyles((theme: Theme) => createStyles({

// }))

export default TemplateList