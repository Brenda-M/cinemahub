import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../components/config";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import AddToFavorites from "./AddToFavorites";

const MediaCard = ({ id, poster_path, title, name, vote_average, release_date, first_air_date, }) => {
  const mediaType = title ? "movie" : "tv";
  const mediaDetailsPath = mediaType === "tv" ? `/tv/${id}` : `/movie/${id}`;

  // const handleAddToFavorites = (itemTitle) => {
  //   console.log("Added to favorites:", itemTitle);
  //   const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //   if (!favorites.includes(itemTitle)) {
  //     favorites.push(itemTitle);
  //     localStorage.setItem("favorites", JSON.stringify(favorites));
  //   }
  // };
  const releaseYear = new Date(release_date).getFullYear();
  const firstAirDate = new Date(first_air_date).getFullYear();

  return (

    <div>
      <div className="rounded overflow-hidden shadow-lg flex flex-col h-full transform transition duration-300 hover:scale-105 text-white">
        {/* <Link to={mediaDetailsPath} className="flex flex-col h-full">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src={poster_path ? `${img_300}${poster_path}` : unavailable}
              alt={title || name}
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>

        </Link> */}
        {/* <Link to={mediaDetailsPath} className="flex flex-col h-full">
          <div
            className="relative h-0 pb-4/3"
            style={{
              backgroundImage: `url(${poster_path ? `${img_300}${poster_path}` : unavailable})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Link> */}
        <Link to={mediaDetailsPath} className="flex flex-col">
          <div
            className="relative"
            style={{
              backgroundImage: `url(${poster_path ? `${img_300}${poster_path}` : unavailable})`,
              backgroundPosition: "center",
              backgroundSize: "134px 196px",
              maxWidth: "100%",
              width: "134px",
              height: "196px"
          }}
        />
        </Link>
      </div>
      <div className="card-details">
        <p>{title || name}</p>
        <div className="card-info">
          <p>{releaseYear || firstAirDate}</p>
          {mediaType}
        </div>
      </div>

    </div>
  );
};

export default MediaCard;


<div>
      {/* <div className="rounded overflow-hidden shadow-lg flex flex-col h-full transform transition duration-300 hover:scale-105 text-white">
        <Link to={mediaDetailsPath} className="flex flex-col">
          <div
            className="relative"
            style={{
              backgroundImage: `url(${poster_path ? `${img_300}${poster_path}` : unavailable})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              maxWidth: "100%",
              width: "134px",
              height: "196px"
          }}
        />
        </Link>
      </div> */}
      <div className="card-details">
        <p>{title || name}</p>
        <div className="card-info">
          <p>{releaseYear || firstAirDate}</p>
          {mediaType}
        </div>
      </div>

    </div>

      // const handleAddToFavorites = (itemTitle) => {
  //   console.log("Added to favorites:", itemTitle);
  //   const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //   if (!favorites.includes(itemTitle)) {
  //     favorites.push(itemTitle);
  //     localStorage.setItem("favorites", JSON.stringify(favorites));
  //   }
  // };