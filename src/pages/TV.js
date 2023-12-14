import React, { useState } from "react";
import CardSkeleton from "../components/CardSkeleton";
import Pagination from "../components/Pagination";
import { discoverTvShowsEndpoint } from "../endpoints";
import useApiData from "../hooks/useApiData";
import Genre from "../components/Genre";
import useGenre from "../hooks/useGenre";
import MediaCard from "../components/MediaCard";

const TV = () => {
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState([]);
  const genreURL = useGenre(value);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const tvShowsEndpoint = `${discoverTvShowsEndpoint}&page=${page}&with_genres=${genreURL}`;
  const { data: shows, loading: tvShowsLoading, error: showsError } = useApiData(tvShowsEndpoint);

  if (tvShowsLoading) {
    return <CardSkeleton/>;
  }

  if (!shows || showsError) {
    return <div>Error: Failed to fetch Tv Shows</div>;
  }
  return (
    <div className="container pt-10 px-6">
      <div className="row py-5 my-5">
        <div className="col-12 mt-2 mb-4 text-white text-xl font-semibold home-title">
          All TV Shows
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
          {shows.results.map((show) => (
            <div key={show.id}>
              <MediaCard {...show}/>
            </div>
          ))}
          <Pagination onLoadMore={() => handlePageChange(page + 1)} />
        </div>

      </div>
    </div>
  );
};

export default TV;
