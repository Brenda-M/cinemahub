import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const CustomSlider = ({ items }) => {

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    centerMode: false,
    slidesToShow: 5,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="max-w-screen-xl mx-8">
<Slider {...settings} className="flex ">
  {items.map((item, index) => (
    <div key={index} className="flex-shrink-0 w-full  px-2 mb-4">
      <div className="flex flex-col items-center text-center h-full p-4 border rounded-md shadow-md" style={{ maxHeight: '300px', overflow: 'hidden' }}>
        {item.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
            className="rounded-full mb-2"
            alt={item.name}
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
          />
        ) : (
          <div className="rounded-full bg-gray-300 text-white mb-2 w-20 h-20 flex items-center justify-center">
            {item.name.split(' ').map(word => word[0]).join('')}
          </div>
        )}
        <div className="flex-grow">
          <h6 className="mb-1">{item.name}</h6>
          <p className="text-sm text-muted">{item.character || item.job}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>


      {/* <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 border rounded-md shadow-md gap-4">
            {item.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                alt={item.name}
                className="rounded-full mb-2"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            ) : (
              <div className="rounded-full bg-gray-300 text-white mb-2 w-20 h-20 flex items-center justify-center">
                {item.name.split(' ').map(word => word[0]).join('')}
              </div>
            )}
            <div className="text-center">
              <h6 className="mb-1">{item.name}</h6>
              <p className="text-sm text-muted">{item.character || item.job}</p>
            </div>
          </div>
        ))}
      </Slider> */}


    </div>
  );
};

export default CustomSlider;

