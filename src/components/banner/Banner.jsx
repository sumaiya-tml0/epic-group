import React from 'react'
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import img1 from "../../assets/banner/banner1.jpg"
import img2 from "../../assets/banner/banner2.jpg"
import img3 from "../../assets/banner/banner3.jpg"
import img4 from "../../assets/banner/banner4.jpg"

import careerBanner from '../../assets/careerPage/banner.jpg'
import BannerText from './BannerText';


function Banner() {
  const location = useLocation();
  const path = location.pathname
   const isHomePage = path === "/";

   const bannerHeights = {
  "/": "h-[90vh]",
  "/about": "h-[100vh]",
  "/our-capabilities": "h-[87vh]",
  "/sustainability": "h-[80vh]",
  "/our-careers": "h-[60vh]",
  "/our-people": "h-[89vh]",
  "/showroom": "h-[98vh]",
  "/epic-brand-values": "h-[68vh]"
  
};

const currentHeight = bannerHeights[path] || "h-[60vh]"; // Default height

const videoSources = {
  "/about": "https://www.youtube.com/embed/VXQAIII8UeY",
  "/sustainability": "https://www.youtube.com/embed/hc8s_amYc70",
  "/showroom": "https://www.youtube.com/embed/jyi1EZlVWZI"
};

const currentVideo = videoSources[path];

    const bannerType = {
    "/": "slider",
    "/about": "video",
    "/sustainability": "video",
    "/our-careers": "image",
    "/showroom": "video",
    "/epic-brand-values": "image"
  }[path] || "none"; 

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
   <div className={`relative w-full ${currentHeight} overflow-hidden`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Slider (should be behind the header) */}
         {bannerType === "slider" && (
          <Slider {...settings}>
            {[img1, img2, img3, img4].map((img, idx) => (
              <div key={idx} className="w-full h-[90vh]">
                <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </Slider>
        )}

        {bannerType === "image" && (
          <img src={careerBanner} alt="Banner" className="w-full h-full object-cover" />
        )}

 {bannerType === "video" && currentVideo && (
        <iframe width="100%" height="100%" src={`${currentVideo}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     
        )}


      {/* Scroll Text */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 lg:flex flex-col items-center text-white text-sm tracking-widest hidden cursor-pointer">
        <span className="-rotate-90 origin-center whitespace-nowrap mb-3">scroll</span>
        <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
        <span className="border border-white w-full -rotate-90 mt-5"></span>
      </div>


    </div>
      {isHomePage && <BannerText/>}
      </>
  )
}

export default Banner