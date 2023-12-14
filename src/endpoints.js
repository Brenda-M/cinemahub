const baseEndpoint = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export const trendingEndpoint = `${baseEndpoint}/trending/all/day?api_key=${apiKey}`;
export const topRatedTvEndpoint = `${baseEndpoint}/tv/top_rated?language=en-US&api_key=${apiKey}`;
export const popularTvEndpoint = `${baseEndpoint}/tv/popular?language=en-US&api_key=${apiKey}`;
export const onTheAirTvEndpoint = `${baseEndpoint}/tv/on_the_air?language=en-US&api_key=${apiKey}`;
export const airingTodayTvEndpoint = `${baseEndpoint}/tv/airing_today?language=en-US&api_key=${apiKey}`;
export const nowPlayingMoviesEndpoint = `${baseEndpoint}/movie/now_playing?api_key=${apiKey}`;
export const popularMoviesEndpoint = `${baseEndpoint}/movie/popular?language=en-US&api_key=${apiKey}`;
export const topRatedMoviesEndpoint = `${baseEndpoint}/movie/top_rated?language=en-US&api_key=${apiKey}`;
export const upcomingMoviesEndpoint = `${baseEndpoint}/movie/upcoming?language=en-US&api_key=${apiKey}`;
export const discoverMoviesEndpoint = `${baseEndpoint}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`;
export const discoverTvShowsEndpoint = `${baseEndpoint}/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`
export const videosEndpoint = (id) => `${baseEndpoint}/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
export const movieDetailsEndpoint = (id) => `${baseEndpoint}/movie/${id}?api_key=${apiKey}&language=en-US&with_cast=true`;
export const tvDetailsEndpoint = (id) => `${baseEndpoint}/tv/${id}?api_key=${apiKey}&language=en-US`;
export const tvVideosEndpoint = (id) =>`${baseEndpoint}/tv/${id}/videos?api_key=${apiKey}&language=en-US`;
export const movieCreditsEndpoint = (id) => `${baseEndpoint}/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
export const tvCreditsEndpoint = (id) => `${baseEndpoint}/tv/${id}/credits?api_key=${apiKey}&language=en-US`;
export const movieRecommendationsEndpoint = (id) => `${baseEndpoint}/movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
export const seriesRecommendationsEndpoint = (id) => `${baseEndpoint}/tv/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
                                                       
// https://api.themoviedb.org/3/movie/1075794/watch/providers \

