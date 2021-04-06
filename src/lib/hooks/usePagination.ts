import { useState, useEffect } from 'react';

type PaginationConfig = {
    limit?: number
}

export function usePagination<T>(items: T[], config?: PaginationConfig) {
    const [list, setList] = useState<T[]>(items);
    const limit = config?.limit || 10;
    const [curPage, setCurPage] = useState(1);
    const startIndex = limit * (curPage - 1)
    const endIndex = startIndex + limit;

    useEffect(() => {
        setList(items)
    }, [items])

    const isValidPage = (page: number) => {
        const total = list.length;
        const totalPages = Math.ceil(total / limit);
        return page <= totalPages && page > 0
    }

    const handlePageChange = (page: number) => {
        if (isValidPage(page)) {
            setCurPage(page)
        }
    }


    return {
        list,
        paginatedList: list.slice(startIndex, endIndex),
        handlePageChange,
        isValidPage,
        curPage,

    }
}