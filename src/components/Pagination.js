import React, { useState } from 'react';

const Pagination = () => {
  const [page, setPage] = useState(1);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
   
  const handleNext = () => {
    if (page < 10) {
      setPage(page + 1);
    }
  };

  return (
    <div className="my-3 d-flex justify-content-between align-items-center">
      <button className="px-3 py-1 m-1 text-center btn-primary" onClick={handlePrevious}>
        Previous
      </button>
      <span>Page {page}</span>
      <button className="px-3 py-1 m-1 text-center btn-primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
