import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import img1 from "../../assets/banner/banner1.jpg"
import img2 from "../../assets/banner/banner2.jpg"
import img3 from "../../assets/banner/banner3.jpg"
import img4 from "../../assets/banner/banner4.jpg"
import BannerText from './BannerText';

function Banner() {
     const settings = {
    
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };
  return (
   <>
   <div className="slider-container relative w-full h-[450px] md:h-[880px] sm:h-[400px] overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Slider (should be behind the header) */}
      <Slider {...settings}>
       {[img1, img2, img3, img4].map((img, idx) => (
          <div key={idx} className="w-full h-[450px] md:h-[880px] sm:h-[400px]">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      {/* Scroll Text */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 lg:flex flex-col items-center text-white text-sm tracking-widest hidden cursor-pointer">
        <span className="-rotate-90 origin-center whitespace-nowrap mb-3">scroll</span>
        <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
        <span className="border border-white w-full -rotate-90 mt-5"></span>
      </div>


    </div>
      <BannerText/></>
  )
}

export default Banner