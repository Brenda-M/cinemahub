


// import React from 'react';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const TrailerSlider = ({ trailers }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       {trailers.map((trailer, index) => (
//         <div key={index} className="p-4">
//           <iframe
//             width="100%"
//             height="250"
//             className="rounded-md"
//             src={`https://www.youtube.com/embed/${trailer.key}`}
//             title={trailer.name}
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default TrailerSlider;
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrailerSlider = ({ trailers }) => {
  // Display in a three-column grid if there are less than three trailers
  if (trailers.length <= 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {trailers.map((trailer, index) => (
          <div key={index} className="p-4">
            <iframe
              width="100%"
              height="250"
              className="rounded-md"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    );
  }

  // Otherwise, display in the slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {trailers.map((trailer, index) => (
        <div key={index} className="p-4">
          <iframe
            width="100%"
            height="250"
            className="rounded-md"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Slider>
  );
};

export default TrailerSlider;

