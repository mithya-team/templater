import { useState, useEffect } from 'react';

type PaginationConfig = {
    limit?: number
}

export function usePagination<T>(items: T[], config?: PaginationConfig) {
    const [list, setList] = useState<T[]>(items);
    const limit = config?.limit || 10;
    const [loading, setLoading] = useState(false);
    const [curPage, setCurPage] = useState(1);
    const startIndex = limit * (curPage - 1)
    const endIndex = startIndex + limit;

    console.log("use pagination", list, limit, curPage, list.slice(startIndex, endIndex))

    useEffect(() => {
        console.log("use effect her")
        setList(items)
    }, [items])

    const isValidPage = (page: number) => {
        const total = list.length;
        const totalPages = Math.ceil(total / limit);
        return page <= totalPages && page > 0
    }

    const handlePageChange = (page: number) => {
        if (isValidPage(page)) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setCurPage(page)
            }, 500);
        }
    }


    return {
        list,
        loading,
        paginatedList: list.slice(startIndex, endIndex),
        handlePageChange,
        isValidPage,
        curPage,

    }
}