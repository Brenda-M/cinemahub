import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../components/config";

const HomeCard = ({ id, poster_path, title, name }) => {

  const mediaType = title ? "movie" : "tv";

  const mediaDetailsPath = mediaType === "tv" ? `/tv/${id}` : `/movie/${id}`;

  return (
    // <Link to={mediaDetailsPath} style={{ textDecoration: "none" }}>
    //   <div className="card-container">
    //     <img
    //       src={poster_path ? `${img_300}${poster_path}` : unavailable}
    //       className="card-img"
    //       alt={title || name}
    //     />
    //   </div>
    // </Link>
    <Link to={mediaDetailsPath}>
      <div>
        <div
          className="relative rounded shadow-lg transform transition duration-300 hover:scale-105 hover:border-solid hover:border-2 hover:border-indigo-600 "
          style={{
            backgroundImage: `url(${poster_path ? `${img_300}${poster_path}` : unavailable})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            maxWidth: "100%",
            width: "140px",
            height: "196px"
          }}
        />
      </div>
    </Link>
  );
};

export default HomeCard;
