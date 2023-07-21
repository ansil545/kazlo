import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carouselbanner.css'

function CarouselBanner() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
<div className='slidercontainer'>
    <Slider className='slider' ref={sliderRef} {...settings}>
      <div>
        <img src="https://n.nordstrommedia.com/id/f525d273-0038-4539-809a-b46f82515f0f.jpeg" alt="" srcSet="" />
      </div>
      <div>
        <img src="https://n.nordstrommedia.com/id/85e438df-b940-4471-802d-617f2c346d04.jpeg" alt="" srcSet="" />
      </div>
    </Slider>
    </div>
  );
}

export default CarouselBanner;
