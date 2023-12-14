import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../components/config";

const MediaCard = ({ id, poster_path, title, name,  release_date, first_air_date, }) => {
  const mediaType = title ? "Movie" : "Tv";
  const mediaDetailsPath = mediaType === "Tv" ? `/tv/${id}` : `/movie/${id}`;

  const releaseYear = new Date(release_date).getFullYear();
  const firstAirDate = new Date(first_air_date).getFullYear();

  return (
    <Link to={mediaDetailsPath}>
      <div>
        <div
          className="relative rounded shadow-lg transform transition duration-300 hover:scale-105 hover:border-solid hover:border-2 hover:border-white "
          style={{
            backgroundImage: `url(${poster_path ? `${img_300}${poster_path}` : unavailable})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            maxWidth: "100%",
            width: "140px",
            height: "196px"
          }}
        />
        <div className="card-info">
          <p className="text-sm title text-white mt-2">{title || name}</p>
          <div>
            <div className="card-extra-info text-xs text-teal-400">
              <p>{releaseYear || firstAirDate}</p>
              <p>{mediaType}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default MediaCard;


