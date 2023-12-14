import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import MediaCard from '../components/MediaCard';
import Pagination from '../components/Pagination';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  const [page, setPage] = useState(1);

  const { content, error } = useSearch(query, page);

  useEffect(() => {

  }, [query, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container pt-10 px-6">
      <h2 className="text-xl font-semibold mb-4 text-white">Search Results for "{query}"</h2>
      {error && <div className="text-danger mt-2">{error}</div>}
      <div className="movie-grid">
        {content.map((result) => (
          <div key={result.id}>
            <MediaCard {...result} />
          </div>
        ))}
        <Pagination onLoadMore={() => handlePageChange(page + 1)} />
      </div>
 
      </div>
  );
};

export default SearchResults;
