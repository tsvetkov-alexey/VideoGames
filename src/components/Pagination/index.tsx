import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../Pagination/Pagination.module.scss';

type PageProps = {
    onChangePage: (page: number) => void;
};

const Pagination: React.FC<PageProps> = ({ onChangePage }) => {
    return (
        <div className={styles.root}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(obj) => onChangePage(obj.selected + 1)}
                pageRangeDisplayed={6}
                pageCount={4}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;
