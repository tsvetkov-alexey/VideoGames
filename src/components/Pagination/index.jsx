import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../Pagination/Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
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
