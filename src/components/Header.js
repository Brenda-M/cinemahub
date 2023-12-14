import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash, faFire, faTv, faSearch, faFilm, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    console.log("Toggling mobile nav");
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div>
      <nav className="bg-gray-900 p-4 flex items-center justify-between nav-desktop">
        <div className="container mx-auto flex items-center gap-2">
          <Link to="/" className="flex items-center text-white mr-4">
            <FontAwesomeIcon icon={faVideoSlash} className="text-xl mb-1 mr-3" />
            <span>CinemaHub</span>
          </Link>
          <div className="hidden lg:flex space-x-6 gap-4">
            {data.map((item, index) => (
              <Link key={index} to={item.link} className="flex items-center text-white">
                <FontAwesomeIcon icon={item.icon} className="text-xl mb-1 mr-3" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>


      {/* <nav className={`nav-mobile bg-gray-900 ${isMobileNavOpen ? 'block' : 'hidden'} fixed top-0 h-screen w-1/2 md:w-full left-0 z-50 transform translate-x-full transition-transform duration-300 ease-in-out`}> */}
      <nav className={`nav-mobile bg-gray-900 ${isMobileNavOpen ? 'block' : 'hidden'} fixed top-0 h-screen w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 right-0 left-0 z-50 transform translate-x-full transition-transform duration-300 ease-in-out`}>
        <div className="container mx-auto flex flex-col justify-evenly gap-4 space-y-4 mt-4 p-6 relative">
          <button onClick={toggleMobileNav} className="text-white p-2 focus:outline-none absolute top-0">
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          </button>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white">
              <FontAwesomeIcon icon={faVideoSlash} className="text-xl mb-1 mr-2" />
              <span>CinemaHub</span>
            </Link>
          </div>
          {data.map((item, index) => (
            <Link key={index} to={item.link} className="flex items-center text-white">
              <FontAwesomeIcon icon={item.icon} className="text-xl mb-1 mr-2" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="block lg:hidden fixed top-4 right-4 z-50">
        <button onClick={toggleMobileNav} className="text-white p-2 focus:outline-none">
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;



// function Header() {
//   return (
//     <nav className="bg-gray-900 p-4">
//       <div className="container mx-auto">
//         .nav-
//         <Link to="/" className="text-white text-lg flex items-center">
//           <FontAwesomeIcon icon={faVideoSlash} className="mr-2" />
//           CinemaHub
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Header;
