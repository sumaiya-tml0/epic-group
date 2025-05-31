import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import img1 from "../../assets/aboutPage/8.png";
import img2 from "../../assets/aboutPage/10.png";
import img3 from "../../assets/aboutPage/12.png";
import img4 from "../../assets/aboutPage/15.png";
import img5 from "../../assets/aboutPage/16.png";
import img6 from "../../assets/aboutPage/1-1.png";
import img7 from "../../assets/aboutPage/7.png";
import img8 from "../../assets/aboutPage/pwc.png";
import img9 from "../../assets/aboutPage/8.jpg";
import img10 from "../../assets/aboutPage/Fast-React.png";
import img11 from "../../assets/aboutPage/partners-7.jpg";
import img12 from "../../assets/aboutPage/partners-5.jpg";
import img13 from "../../assets/aboutPage/partners-6.jpg";

const Clients = () => {
  return (
    <div className="pt-[60px] pb-20">
      <div className="max-w-[1250px] mx-auto px-4">
        <h3 className="text-center text-black font-bold text-3xl mb-16 leading-tight">
          We are proud to count many world-class <br /> brands amongst our
          long-time customers.
        </h3>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          slidesPerGroup={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, slidesPerGroup: 2 },
            640: { slidesPerView: 3, slidesPerGroup: 3 },
            768: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 5, slidesPerGroup: 5 },
          }}
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img13} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
