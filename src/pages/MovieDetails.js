
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useApiData from '../hooks/useApiData';
import Loader from '../components/Loader';
import TrailerSlider from '../components/TrailerSlider';
import { movieDetailsEndpoint, videosEndpoint, movieCreditsEndpoint, movieRecommendationsEndpoint } from '../endpoints';
import StarRating from '../components/StarRating'
import MediaCard from '../components/MediaCard'
import CustomSlider from '../components/CustomSlider';
import { img_300, unavailable } from "../components/config";
import FavoriteButton from '../components/FavoriteButton';
import Watchlist from '../components/Watchlist';

const MovieDetails = ({ rating }) => {
  const { id } = useParams();
  const topRef = useRef();

  const { data: movieDetails, loading: detailsLoading, error: detailsError } = useApiData(movieDetailsEndpoint(id));
  const { data: trailerVideos, loading: videosLoading, error: videosError } = useApiData(videosEndpoint(id));
  const { data: credits, loading: creditsLoading, error: creditsError } = useApiData(movieCreditsEndpoint(id));
  const { data: recommendations } = useApiData(movieRecommendationsEndpoint(id));


  if (detailsLoading || videosLoading || creditsLoading) {
    return <Loader />;
  }

  if (detailsError || !movieDetails || videosError || creditsError) {
    return <div>Error: Failed to fetch movie details</div>;
  }

  const selectRecommendations = recommendations && recommendations.results && recommendations.results.slice(0, 8);

  const { title, overview, backdrop_path, release_date, runtime, genres, poster_path, revenue, budget, } = movieDetails;

  // const language = spoken_languages[0].english_name
  const budgetFormatted = budget.toLocaleString()
  const revenueFormatted = revenue.toLocaleString()




  const officialTrailers = Array.isArray(trailerVideos.results)
    ? trailerVideos.results
    : [];

  const { cast, crew } = credits;

  const releaseYear = new Date(release_date).getFullYear();
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
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
              src={`${poster_path ? `${img_300}${poster_path}` : unavailable}`}
              className='w-full md:w-3/4 mx-auto z-10 rounded-md p-10'
              alt={title}
            />
          </div>
          <div className="flex-shrink-0 text-white col-span-1 md:col-span-1 flex flex-col justify-center z-10">
            <h2 className="mb-3 text-xl font-bold">{title} ({releaseYear})</h2>
            <p className="mb-3 text-sm">Runtime: {runtime} minutes</p>
            <StarRating rating={rating} />
            {genres && genres.length > 0 && (
              <div className="mb-3">
                <p className="mb-1 text-sm font-semibold">Genre:</p>
                <div className="flex flex-wrap">
                  {genres.map((genre) => (
                    <span key={genre.id} className="badge bg-dark me-2 mb-2 px-2 py-1 text-sm">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <h3 className="text-lg font-semibold mt-2 mb-2">Synopsis</h3>
            <p className="w-full text-sm">{overview}</p>
            <div className='flex items-center mt-4 gap-4'>
              <FavoriteButton itemId={id} />
              <Watchlist id={id}/>
            </div>
          </div>
        </header>
        <div className="container pt-10 px-6 flex flex-col justify-evenly gap-8">
          {officialTrailers && officialTrailers.length > 0 && (
            <div className="mt-4">
              <h4 className="home-title text-2xl font-bold mb-10 text-white">Videos</h4>
              <TrailerSlider trailers={officialTrailers} />
            </div>
          )}

          <hr className="my-4" />

          {/* Cast and Crew Section */}
          {cast && cast.length > 0 && crew && crew.length > 0 && (
            <div className='container mx-auto text-white'>
              <div className="mt-4">
                <h4 className="home-title text-2xl font-bold mb-10 text-white">Cast and Crew</h4>
                <CustomSlider items={[...cast, ...crew]} />
              </div>
            </div>
          )}

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

          {/* Information Section */}
          {/* {language && ( */}
          <div className='container text-white'>
            <h4 className='home-title text-2xl font-bold mb-10 text-white'>Information</h4>
            {/* <p className="mb-2">Original Language: {language}</p> */}
            <p className="mb-2">Budget: {budgetFormatted !== 0 ? budgetFormatted : 'N/A'}</p>
            <p className="mb-2">Revenue: {revenueFormatted !== 0 ? revenueFormatted : 'N/A'}</p>
          </div>
          {/* )} */}

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
    </div>
  );
};

export default MovieDetails;


