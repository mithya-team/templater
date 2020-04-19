declare type PaginationConfig = {
    limit?: number;
};
export declare function usePagination<T>(items: T[], config?: PaginationConfig): {
    list: T[];
    paginatedList: T[];
    handlePageChange: (page: number) => void;
    isValidPage: (page: number) => boolean;
    curPage: number;
};
export {};
