import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavoriteButton = ({ itemId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      setIsFavorite(favorites.includes(itemId));
    }
  }, [itemId]);

  const toggleFavorite = () => {
    // Get the current favorites from local storage
    const storedFavorites = localStorage.getItem('favorites');
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    // Toggle the favorite status
    if (isFavorite) {
      favorites = favorites.filter((id) => id !== itemId);
    } else {
      favorites.push(itemId);
    }

    // Update local storage and state
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      className={`bg-gray-200 px-4 py-2 rounded-full ${
        isFavorite ? 'text-red-500' : 'text-gray-600'
      }`}
      onClick={toggleFavorite}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
};

export default FavoriteButton;
