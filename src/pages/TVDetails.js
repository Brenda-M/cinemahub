
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useApiData from '../hooks/useApiData';
import Loader from '../components/Loader';
import MediaCard from '../components/MediaCard';
import TrailerSlider from '../components/TrailerSlider';
import { tvDetailsEndpoint, tvVideosEndpoint, tvCreditsEndpoint, seriesRecommendationsEndpoint } from '../endpoints';
import CustomSlider from '../components/CustomSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TVDetails = () => {
  const { id } = useParams();
  const topRef = useRef()
  const { data: tvDetails, loading: detailsLoading, error: detailsError } = useApiData(tvDetailsEndpoint(id));
  const { data: trailerVideos, loading: videosLoading, error: videosError } = useApiData(tvVideosEndpoint(id));
  const { data: credits, loading: creditsLoading, error: creditsError } = useApiData(tvCreditsEndpoint(id));
  const { data: recommendations } = useApiData(seriesRecommendationsEndpoint(id));

  const [officialTrailers, setOfficialTrailers] = useState([]);

  useEffect(() => {
    if (trailerVideos && trailerVideos.results) {
      const officialTrailers = trailerVideos.results.filter(video => video.official);
      setOfficialTrailers(officialTrailers);
    }
  }, [trailerVideos]);

  if (detailsLoading || videosLoading || creditsLoading) {
    return <Loader />;
  }

  if (detailsError || !tvDetails || videosError || creditsError) {
    console.error('Error fetching TV details:', detailsError);
    console.error('Error fetching trailer videos:', videosError);
    console.error('Error fetching credits:', creditsError);
    return <div>Error: Failed to fetch TV show details</div>;
  }

  const selectRecommendations = recommendations && recommendations.results && recommendations.results.slice(0, 8);

  const { name, overview, poster_path, first_air_date, episode_run_time, spoken_languages, backdrop_path, genres } = tvDetails;
  const { cast, crew } = credits;

  const releaseYear = new Date(first_air_date).getFullYear();

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={topRef}>
      <header
        className="relative bg-cover bg-center grid grid-cols-1 md:grid-cols-2 gap-4 p-4 relative max-w-screen-xl mx-auto"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>

        <div className="flex-shrink-0 mb-4 md:mb-0 col-span-1 md:col-span-1 flex items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className='w-full md:w-3/4 mx-auto z-10 rounded-md p-10'
            alt={name}
          />
        </div>
        <div className="flex-shrink-0 text-white col-span-1 md:col-span-1 flex flex-col justify-center z-10">
          <h2 className="mb-3">{name} ({releaseYear})</h2>
          <p className="mb-3">Runtime: {episode_run_time} minutes</p>
          {genres && genres.length > 0 && (
            <div className="mb-3">
              <p className="mb-1">Genre:</p>
              <div className="flex flex-wrap">
                {genres.map((genre) => (
                  <span key={genre.id} className="badge bg-dark me-2 mb-2">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          <h3>Synopsis</h3>
          <p className="w-full">{overview}</p>
        </div>
      </header>

      <div className="container pt-10 px-6 flex flex-col justify-evenly gap-8">

        <div className='container mx-auto p-6'>
          <h4 className="home-title text-2xl font-bold mb-10 text-white">Videos</h4>
          {officialTrailers && officialTrailers.length > 0 ? (
            <div className="mt-4">
              <TrailerSlider trailers={officialTrailers} />
            </div>
          ) : (
            <p>No official trailers available</p>
          )}
        </div>

        <hr className="my-4" />


        <div className='container mx-auto text-white'>
          {cast && cast.length > 0 && crew && crew.length > 0 && (
            <div className="mt-4">
              <h4 className="home-title text-2xl font-bold mb-10 text-white">Cast and Crew</h4>
              <CustomSlider items={[...cast, ...crew]} />
            </div>
          )}
        </div>

        <hr className="my-4" />

        <div className='container mx-auto text-white'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mb-4 md:mb-0'>
              <h4 className='home-title text-2xl font-bold mb-10 text-white'>About</h4>
              <p>{overview}</p>
            </div>
            <div className='md:w-1/2'>

            </div>
          </div>
        </div>




        <hr className='my-4' />


        <div className='container text-white'>
          <h4 className='home-title text-2xl font-bold mb-10 text-white'>Information</h4>
          <p>Original Language: {spoken_languages.english_name}</p>


        </div>

        <hr className="my-4" />


        <div>
          <h4 className="home-title text-2xl font-bold mb-10 text-white">Similar</h4>
          {selectRecommendations && selectRecommendations.length > 0 ? (

            <div className="mt-4 movie-grid">

              {selectRecommendations.map((show) => (
                <div key={show.id} >
                  <MediaCard {...show} onClick={scrollToTop} />
                </div>
              ))}
            </div>
          ) : (
            <p>No recommendations</p>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default TVDetails;


