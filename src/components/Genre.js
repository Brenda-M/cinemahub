import React, { useEffect } from "react";

const Genre = ({ genre, setGenre, setPage, type, value, setValue }) => {
  const fetchGenre = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
      );
      const { genres } = await response.json();
      setGenre(genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchGenre();
    };

    fetchData();
  }, [setGenre]);

  const categoryRemove = (genres) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre, genres]);
    setPage(1);
  };

  const categoryAdd = (genres) => {
    setValue([...value, genres]);
    setGenre(genre.filter((g) => g.id !== genres.id));
    setPage(1);
  };

  return (
    <div className="container mx-auto">
      <div className="mb-3">
        <div className="flex flex-wrap items-center justify-center">
          {value &&
            value.map((val) => {
              const { id, name } = val;
              return (
                <div className="m-2" key={id}>
                  <button
                    className="text-white px-4 py-2 text-center rounded-full selected"
                    onClick={() => categoryRemove(val)}
                    style={{ border: "2px solid #ccc", background: "#eee" }}
                  >
                    {name}
                  </button>
                </div>
              );
            })}

          {genre &&
            genre.map((gen) => {
              const { id, name } = gen;
              const isSelected = value.some((val) => val.id === id);

              return (
                <div className={`m-2`} key={id}>
                  <button
                    className={`bg-dark text-white px-4 py-2 text-center rounded-full ${isSelected ? "selected" : ""}`}
                    onClick={() => categoryAdd(gen)}
                    style={{ border: "1px solid #ccc", background: isSelected ? "#3498db" : "#eee", color: isSelected ? "#fff" : "#000" }}
                  >
                    {name}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Genre;
