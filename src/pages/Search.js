import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { img_300, unavailable } from "../components/config";
import useSearch from '../hooks/useSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { content, error } = useSearch(searchText, page);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    setPage(1);
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search-results?query=${searchText}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="flex justify-center items-center">
        <div className="md:w-1/2">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <FontAwesomeIcon icon={faSearch}/>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              id="search"
              placeholder="Search..." />
          </div>
          {error && <div className="text-danger mt-2">{error}</div>}

          <div className="mt-3">
            {content.map((result) => (
              <Link
                to={result.media_type === 'movie' ? `/movies/${result.id}` : `/TV/${result.id}`}
                key={result.id}
                className="text-decoration-none"
              >
                <div className="bg-dark text-white p-2 mb-2 rounded">
                  <div className='flex items-center'>
                    <img
                      src={result.poster_path ? `${img_300}${result.poster_path}` : unavailable}
                      className="w-12 h-12 object-cover rounded"
                      alt={result.title || result.name}
                    />
                    <h5 className="ml-3">{result.title || result.name}</h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
