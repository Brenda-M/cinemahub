import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  const MAX_STARS = 5;
  const roundedRating = Math.round((rating / 2) * 2) / 2; // Adjusted for a rating out of 10

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= MAX_STARS; i++) {
      if (i <= roundedRating) {
        // Full star
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-teal-500" />);
      } else if (i - 0.5 === roundedRating) {
        // Half star
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} className="text-teal-500" />);
      } else {
        // Empty star
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-teal-500"/>);
      }
    }

    return stars;
  };

  return <div className="mt-2 mb-2">{renderStars()}</div>;
};

export default StarRating;
