import React, { useState } from 'react';
import Genre from '../components/Genre';
import useGenre from '../hooks/useGenre';
import { discoverMoviesEndpoint } from '../endpoints';
import CardSkeleton from '../components/CardSkeleton';
import useApiData from '../hooks/useApiData';
import MediaCard from '../components/MediaCard';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState([]);

  const genreURL = useGenre(value);
  const moviesEndpoint = `${discoverMoviesEndpoint}&page=${page}&with_genres=${genreURL}`;


  const { data: movies, loading: moviesLoading, error: moviesError } = useApiData(moviesEndpoint);
  
  if (moviesLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}>
            <CardSkeleton />
          </div>
        ))}
      </div>
    );
  }

 

  if (!movies || moviesError) {
    return <div>Error: Failed to fetch Movies</div>;
  }
  return (
    <div className="container pt-10 px-6">
      <div className="row py-5 my-5">
        <div className="col-12 text-white mt-2 mb-4 text-xl font-semibold home-title">
          All Movies
        </div>
        <Genre
          genre={genre}
          setGenre={setGenre}
          setPage={setPage}
          type="tv"
          value={value}
          setValue={setValue}
        />
        <div className='movie-grid'>
          {movies.results.map((show) => (
            <div key={show.id}>
              <MediaCard {...show} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies