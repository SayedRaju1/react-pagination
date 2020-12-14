import React from 'react';

const Pagination = ({ dataPerPage, totalData, paginate, nextBtn, previousBtn, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="d-flex justify-content-center">
            <p style={{ cursor: "pointer" }} className='page-link text-reset' onClick={previousBtn}>Previous</p>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a className={`page-link  ${currentPage === number ? 'bg-dark text-white font-weight-bold' : 'text-dark'}`} onClick={() => paginate(number)} href='#'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            <p style={{ cursor: "pointer" }} className='page-link text-reset pointer' onClick={nextBtn}>Next</p>
        </nav>
    );
};

export default Pagination;