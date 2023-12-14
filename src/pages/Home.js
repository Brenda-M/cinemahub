import React from "react";
import useApiData from "../hooks/useApiData";
import CardSkeleton from "../components/CardSkeleton";
import HomeCard from "../components/HomeCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  trendingEndpoint,
  topRatedTvEndpoint,
  popularTvEndpoint,
  onTheAirTvEndpoint,
  airingTodayTvEndpoint,
  nowPlayingMoviesEndpoint,
  popularMoviesEndpoint,
  topRatedMoviesEndpoint,
  upcomingMoviesEndpoint,
} from '../endpoints';

const Home = () => {
  const { data: trendingMovies, loading: trendingLoading, error: trendingError } = useApiData(trendingEndpoint);
  const { data: topRatedTv, loading: topRatedTvLoading, error: topRatedTvError } = useApiData(topRatedTvEndpoint);
  const { data: popularTv, loading: popularTvLoading, error: popularTvError } = useApiData(popularTvEndpoint);
  const { data: onTheAirTv, loading: onTheAirTvLoading, error: onTheAirTvError } = useApiData(onTheAirTvEndpoint);
  const { data: airingTodayTv, loading: airingTodayTvLoading, error: airingTodayTvError } = useApiData(airingTodayTvEndpoint);
  const { data: nowPlayingMovies, loading: nowPlayingMoviesLoading, error: nowPlayingMoviesError } = useApiData(nowPlayingMoviesEndpoint);
  const { data: popularMovies, loading: popularMoviesLoading, error: popularMoviesError } = useApiData(popularMoviesEndpoint);
  const { data: topRatedMovies, loading: topRatedMoviesLoading, error: topRatedMoviesError } = useApiData(topRatedMoviesEndpoint);
  const { data: upcomingMovies, loading: upcomingMoviesLoading, error: upcomingMoviesError } = useApiData(upcomingMoviesEndpoint);

  const NextArrow = ({ className, style, onClick }) => (
    <div
      className={`rounded-circle bg-primary text-light flex items-center justify-center ${className}`}
      style={{ ...style, padding: "10px" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowCircleRight} />
    </div>
  );

  const PrevArrow = ({ className, style, onClick }) => (
    <div
      className={`rounded-circle bg-primary text-light flex items-center justify-center ${className}`}
      style={{ ...style, padding: "10px" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowCircleLeft} />
    </div>
  );

  if (trendingLoading || topRatedMoviesLoading || onTheAirTvLoading || nowPlayingMoviesLoading || topRatedTvLoading || airingTodayTvLoading || popularTvLoading || popularMoviesLoading || upcomingMoviesLoading) {
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-4 flex-1 pt-10 px-6">
      {/* Trending Section */}
      <div className="scroll-container">

        <div className="m-8">
          <h3 className="home-title text-2xl font-bold mb-4 text-white">Trending Today</h3>
          {trendingError && <p className="text-red-500">Error: {trendingError}</p>}
          {trendingMovies && trendingMovies.results && (
            <Slider {...settings} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {trendingMovies.results.map((movie) => (
                <div key={movie.id} className="p-2">
                  <HomeCard {...movie} />
                </div>
              ))}
            </Slider>
          )}
        </div>


        {/* Top rated tv shows section */}
        <div className="m-8">
          <h3 className="home-title text-2xl font-bold mb-4 text-white">Top Rated TV Shows</h3>
          {topRatedTvError && <p>Error: {topRatedTvError}</p>}
          {topRatedTv && topRatedTv.results ? (
            <Slider {...settings}>
              {topRatedTv.results.map((show) => (
                <div key={show.id} className="md:w-1/4 sm:w-1/2 w-full p-2">
                  <HomeCard {...show} />
                </div>
              ))}
            </Slider>
          ) : (
            "Top-rated tv shows not available"
          )}
        </div>

        {/* Popular TV Shows Section */}
        <div className="m-8">
          <h3 className="home-title text-2xl font-bold mb-4 text-white">Popular TV Shows</h3>
          {popularTvError && <p>Error: {popularTvError}</p>}
          {popularTv && popularTv.results ? (
            <Slider {...settings}>
              {popularTv.results.map((show) => (
                <div key={show.id} className="md:w-1/4 sm:w-1/2 w-full p-2">
                  <HomeCard {...show} />
                </div>
              ))}
            </Slider>
          ) : (
            "Popular tv shows not available"
          )}
        </div>

        {/* On The Air TV Shows Section */}
        <div className="m-8">
          <h3 className="home-title text-2xl font-bold mb-4 text-white">On The Air TV Shows</h3>
          {onTheAirTvError && <p>Error: {onTheAirTvError}</p>}
          {onTheAirTv && onTheAirTv.results ? (
            <Slider {...settings}>
              {onTheAirTv.results.map((show) => (
                <div key={show.id} className="md:w-1/4 sm:w-1/2 w-full p-2">
                  <HomeCard {...show} />
                </div>
              ))}
            </Slider>
          ) : (
            'No tv shows airing'
          )}
        </div>

        {/* Airing Today TV Shows Section */}
        <div className="m-8">
          <h3 className="home-title text-2xl font-bold mb-4 text-white">Airing Today TV Shows</h3>
          {airingTodayTvError && <p>Error: {airingTodayTvError}</p>}
          {airingTodayTv && airingTodayTv.results ? (
            <Slider {...settings}>
              {airingTodayTv.results.map((show) => (
                <div key={show.id} className="md:w-1/4 sm:w-1/2 w-full p-2">
                  <HomeCard {...show} />
                </div>
              ))}
            </Slider>
          ) : (
            'No tv shows airing today'
          )}
        </div>

        {/* Now Playing Movies Section */}
        <div className="m-8">
          <h3 className="home-title text-2xl font-bold mb-4 text-white">Now Playing Movies</h3>
          {nowPlayingMoviesError && <p>Error: {nowPlayingMoviesError}</p>}
          {nowPlayingMovies && nowPlayingMovies.results ? (
            <Slider {...settings}>
              {nowPlayingMovies.results.map((movie) => (
                <div key={movie.id} className="md:w-1/4 sm:w-1/2 w-full p-2">
                  <HomeCard {...movie} />
                </div>
              ))}
            </Slider>
          ) : (
            'No movies playing'
          )}
        </div>

        {/* Popular Movies Section */}
        <div className="m-8">
          <h3 className="home-title text-2xl font-bold mb-4 text-white">Popular Movies</h3>
          {popularMoviesError && <p>Error: {popularMoviesError}</p>}
          {popularMovies && popularMovies.results ? (
            <Slider {...settings}>
              {popularMovies.results.map((movie) => (
                <div key={movie.id} className="md:w-1/4 sm:w-1/2 w-full p-2">
                  <HomeCard {...movie} />
                </div>
              ))}
            </Slider>
          ) : (
            'No popular movies'
          )}
        </div>

        {/* Top Rated Movies Section */}
        <div className="m-8">
          <h3 className="home-title text-2xl font-bold mb-4 text-white">Top Rated Movies</h3>
          {topRatedMoviesError && <p>Error: {topRatedMoviesError}</p>}
          {topRatedMovies && topRatedMovies.results ? (
            <Slider {...settings}>
              {topRatedMovies.results.map((movie) => (
                <div key={movie.id} className="md:w-1/4 sm:w-1/2 w-full p-2">
                  <HomeCard {...movie} />
                </div>
              ))}
            </Slider>
          ) : (
            'No top-rated movies available'
          )}
        </div>

        {/* Upcoming Movies Section */}
        <div className="m-8">
          <h3 className="home-title text-2xl font-bold mb-4 text-white">Upcoming Movies</h3>
          {upcomingMoviesError && <p>Error: {upcomingMoviesError}</p>}
          {upcomingMovies && upcomingMovies.results ? (
            <Slider {...settings}>
              {upcomingMovies.results.map((movie) => (
                <div key={movie.id} className="md:w-1/4 sm:w-1/2 w-full p-2">
                  <HomeCard {...movie} />
                </div>
              ))}
            </Slider>
          ) : (
            'No upcoming movies available'
          )}
        </div>

      </div>
    </div>
  );
};

export default Home;
