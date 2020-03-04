import React, { useContext } from 'react'
import {
    // createStyles, makeStyles, Theme, 
    Box, LinearProgress, Grid,
} from '@material-ui/core'
import { Template, usePagination } from '../../..';
import { config } from '../../Config';
import TemplateCard from './TemplateCard';
import { Context } from '../../Context';
import Pagination from '../Pagination';

interface IProps {
}


const LIMIT = 8;

const TemplateList: React.FC<IProps> = () => {
    const { listingType } = config;
    // const classes = useStyles(props);
    const context = useContext(Context);
    if (!context) return <div />

    const { templates, status } = context;
    const { paginatedList, curPage, handlePageChange, loading } = usePagination<Template>(templates, { limit: LIMIT })


    if (status === 'loading' || loading)
        return <LinearProgress color="primary" />;

    return (
        <Box >
            {
                listingType === 'list' ?
                    paginatedList.map((t, i) => (
                        <Box margin="10px auto" key={t.id + i} width="500px">
                            <TemplateCard data={t} />
                        </Box>
                    )) : (
                        <Box width="700px" mx="auto">
                            <Grid container spacing={4}>
                                {
                                    paginatedList.map((t, i) => (
                                        <Grid item md={6} key={t.id + i}>
                                            <TemplateCard data={t} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    )
            }
            <Box m="0 auto">
                <Pagination
                    currentPage={curPage}
                    onPageChange={handlePageChange}
                    entriesPerPage={LIMIT}
                    total={templates.length}
                />
            </Box>
        </Box>
    )
}

// const useStyles = makeStyles((theme: Theme) => createStyles({

// }))

export default TemplateList