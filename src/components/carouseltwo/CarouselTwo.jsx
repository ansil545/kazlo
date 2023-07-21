import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {} from '@mui/material'
import "./CarouselTwo.css"
function CarouselTwo() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const settings = {
   
    dotsClass: 'slick-dots custom-dots', 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, 
    customPaging: () => (
      <div className="custom-dot">

      </div> 
    ),
  };

  return (
    <div className='carouseltwocontainer'>
       <div className='carouseltwohead' >
        <h5 className='carouseltwotitle'>LOOKS FOR EVERY OCCASTION</h5>
       </div>
    <Slider className='slider' ref={sliderRef} {...settings}>
      <div className='sliderhead'>
       <img style={{width:"100%",}} src="https://n.nordstrommedia.com/id/3a70fb16-bf15-48ea-b22b-3a34d1aa9e61.jpeg?h=700&w=1608" alt="" srcset="" />
      </div>
      <div>
      <img style={{width:"100%",}} src="https://n.nordstrommedia.com/id/d8ede2da-08e8-4c82-bd6b-ee22c1f5ddac.jpeg?h=700&w=1608" alt="" srcset="" />
      </div>
     
    </Slider>

   
    </div>
  );
}

export default CarouselTwo;
