import React from 'react'
import { createStyles, makeStyles, Theme, Button } from '@material-ui/core'

interface IProps {
    total: number
    entriesPerPage: number
    currentPage: number
    onPageChange: (page: number) => void
}

const Pagination: React.FC<IProps> = (props) => {
    const { total, entriesPerPage, currentPage, onPageChange } = props;
    const totalPages = Math.ceil(total / entriesPerPage);
    const classes = useStyles(props)

    const pages = [
        currentPage,
        currentPage + 1,
        currentPage + 2
    ].map(p => currentPage > 1 ? p - 1 : p).filter(p => p <= totalPages)

    return (
        <div className={classes.root}>
            <Button variant="text" onClick={() => onPageChange(currentPage - 1)}>prev</Button>
            {
                pages.map(p => (
                    <Button color={p === currentPage ? "primary" : "default"} key={p + ''} variant={p === currentPage ? 'contained' : 'text'} onClick={() => onPageChange(p)}>{p}</Button>
                ))
            }
            <Button onClick={() => onPageChange(currentPage + 1)} variant="text">next</Button>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        width: 300,
        margin: '20px auto',
        justifyContent: 'space-around'
    },

}))

export default Pagination