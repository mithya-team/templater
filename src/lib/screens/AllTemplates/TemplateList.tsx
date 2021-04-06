import React, { useContext, useState } from 'react'
import {
    // createStyles, makeStyles, Theme, 
    Box, LinearProgress, Grid,
} from '@material-ui/core'
import { Template, usePagination } from '../../..';
import { config } from '../../Config';
import { TemplateCard } from '../../components';
import { Context } from '../../Context';
import Pagination from '../../components/Pagination';
import { getPath } from '../../utils';

interface IProps {
}


const LIMIT = 8;

const TemplateList: React.FC<IProps> = () => {
    const { listingType } = config;
    // const classes = useStyles(props);
    const context = useContext(Context);
    if (!context) return <div />
    const [loading, setLoading] = useState(false);
    const { templates, status, paginatedList, curPage, handlePageChange } = context;

    const onPageChange = (page: number) => {
        handlePageChange(page)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 400);
    }

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
                                            <TemplateCard data={t} redirectUrl={getPath(t.id)} />
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
                    onPageChange={onPageChange}
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