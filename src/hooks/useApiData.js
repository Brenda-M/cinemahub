// import { useState, useEffect, useCallback } from 'react';

// const useApiData = (endpoint) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await fetch(endpoint);
//       console.log(response)
//       if (!response.ok) {
//         throw new Error(`Failed to fetch data. Status: ${response.status}`);
//       }

//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       setError(error.message || 'Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   }, [endpoint]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return { data, loading, error, fetchData };
// };

// export default useApiData;


import { useState, useEffect, useCallback } from 'react';

const useApiData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData };
};

export default useApiData;
