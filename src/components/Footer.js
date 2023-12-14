import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faFilm, faTv, faSearch } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    icon: faFire,
    name: 'Trending',
    link: '/',
  },
  {
    icon: faFilm,
    name: 'Movies',
    link: '/movies',
  },
  {
    icon: faTv,
    name: 'TV Series',
    link: '/tv',
  },
  {
    icon: faSearch,
    name: 'Search',
    link: '/search',
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-center items-center space-x-6 gap-4">
        {data.map((item, index) => (
          <a key={index} href={item.link} className="flex flex-col items-center">
            <FontAwesomeIcon icon={item.icon} className="text-xl mb-1" />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
