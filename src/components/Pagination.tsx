import React from 'react';
import '../styles/Pagination.scss';

interface Props {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, paginate }) => {
  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const nextBlock = () => {
    const nextPage = Math.min(currentPage + 3, totalPages);
    paginate(nextPage);
  };

  const prevBlock = () => {
    const prevPage = Math.max(currentPage - 3, 1);
    paginate(prevPage);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, Math.floor((currentPage - 1) / 3) * 3 + 1);
    const endPage = Math.min(startPage + 2, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button 
          key={i} 
          onClick={() => paginate(i)} 
          className={currentPage === i ? 'pagination-button active' : 'pagination-button'}
          aria-label={`Page ${i}`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination-container" role="navigation" aria-label="Pagination">
      <button onClick={prevBlock} className="pagination-button" aria-label="Previous Block" aria-disabled={currentPage <= 3}>
        &#171;&#171;
      </button>
      <button onClick={prevPage} className="pagination-button" aria-label="Previous Page" aria-disabled={currentPage === 1}>
        &#171;
      </button>
      {renderPaginationButtons()}
      <button onClick={nextPage} className="pagination-button" aria-label="Next Page" aria-disabled={currentPage === totalPages}>
        &#187;
      </button>
      <button onClick={nextBlock} className="pagination-button" aria-label="Next Block" aria-disabled={currentPage + 3 > totalPages}>
        &#187;&#187;
      </button>
    </div>
  );
};

export default Pagination;
