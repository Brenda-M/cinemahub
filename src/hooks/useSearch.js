// import { useState, useEffect } from 'react';

// const useSearch = (searchText, page) => {
//   const [content, setContent] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSearch = async () => {
//       try {
//         const data = await fetch(
//           `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
//             // `https://api.themoviedb.org/3/search/keyword?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${searchText}&page=${page}`
//         );
  
//         if (!data.ok) {
//           throw new Error('Failed to fetch search results');
//         }
  
//         const { results } = await data.json();
//         setContent(results);
//       } catch (error) {
//         setError(error.message || 'An error occurred while fetching search results.');
//       }
//     };
  
//     fetchSearch();
  
//     // Cleanup function
//     return () => {
//       setContent([]);
//       setError(null);
//     };
//   }, [searchText, page]);
  

//   return { content, error };
// };

// export default useSearch;
import { useState, useEffect } from 'react';

const useSearch = (searchText, page, genreId) => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const genreQuery = genreId ? `&with_genres=${genreId}` : ''; // Include genre filter if provided

        const data = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false${genreQuery}`
        );

        if (!data.ok) {
          throw new Error('Failed to fetch search results');
        }

        const { results } = await data.json();
        setContent(results);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching search results.');
      }
    };

    fetchSearch();

    // Cleanup function
    return () => {
      setContent([]);
      setError(null);
    };
  }, [searchText, page, genreId]);

  return { content, error };
};

export default useSearch;

