// AddToFavorites.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const AddToFavorites = ({ title, name, onAddToFavorites }) => {
  const handleAddToFavorites = () => {
    onAddToFavorites(title || name);
  };

  return (
    <div className="position-absolute top-0 start-0 m-2" style={{ cursor: "pointer" }} onClick={handleAddToFavorites}>
      <FontAwesomeIcon icon={faHeart} className="text-danger" style={{ fontSize: "24px" }} />
    </div>
  );
};

export default AddToFavorites;
