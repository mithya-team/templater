import React from 'react';
interface IProps {
    total: number;
    entriesPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}
declare const Pagination: React.FC<IProps>;
export default Pagination;
