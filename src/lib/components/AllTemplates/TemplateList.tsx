import React, { useContext } from 'react'
import {
    // createStyles, makeStyles, Theme, 
    Box, LinearProgress, Grid,
} from '@material-ui/core'
import { config } from '../../Config';
import TemplateCard from './TemplateCard';
import { Context } from '../../Context';

interface IProps {
}

const TemplateList: React.FC<IProps> = () => {
    const { listingType } = config;
    // const classes = useStyles(props);
    const context = useContext(Context);
    if (!context) return <div />

    const { templates, status } = context;


    if (status === 'loading')
        return <LinearProgress color="primary" />;

    return (
        <Box >
            {
                listingType === 'list' ?
                    templates.map((t, i) => (
                        <Box margin="10px auto" key={t.id + i} width="500px">
                            <TemplateCard data={t} />
                        </Box>
                    )) : (
                        <Box width="700px" mx="auto">
                            <Grid container spacing={4}>
                                {
                                    templates.map((t, i) => (
                                        <Grid item md={6} key={t.id + i}>
                                            <TemplateCard data={t} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    )
            }
        </Box>
    )
}

// const useStyles = makeStyles((theme: Theme) => createStyles({

// }))

export default TemplateList