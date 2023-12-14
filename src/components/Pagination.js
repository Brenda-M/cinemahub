import React from "react";

const Pagination = ({ onLoadMore }) => {
  return (
    <div className="relative rounded shadow-3xl transform transition duration-300 hover:scale-105 hover:border-solid hover:border-2 hover:border-white"
    style={{
      maxWidth: "100%",
      width: "140px",
      height: "196px"
    }}
    >
      <div className="flex items-center justify-center h-full">
        <button className="text-gray-600 px-4 py-2" onClick={onLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Pagination;

