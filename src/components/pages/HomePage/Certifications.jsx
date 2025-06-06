import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import img from "../../../assets/certifications/Certification1.png";
import img1 from "../../../assets/certifications/Certification2.png";
import img2 from "../../../assets/certifications/Certification3.png";
import img3 from "../../../assets/certifications/Certification4.png";
import img4 from "../../../assets/certifications/Certification5.png";
import img5 from "../../../assets/certifications/Certification6.png";
import img6 from "../../../assets/certifications/Certification9.png";
import Marquee from "react-fast-marquee";

function Certifications() {
  return (
    <div className="pt-15">
      <div className="text-center capitalize font-bold text-2xl md:text-3xl lg:text-5xl text-[#1a3b91] mb-8">
        <h2>Accreditations & Certifications</h2>
      </div>
      <Marquee
        pauseOnHover="true"
        speed={150}
        gradient="true"
        autoFill="true"
        draggable="true"
        extensions={{ AutoScroll }}
        aria-label="Certifications Logos"
        className="my-20 max-w-[1250px] mx-auto"
      >
        {[img, img1, img2, img3, img4, img5, img6].map((logo, index) => (
          <div
            key={index}
            className="md:min-w-[120px] lg:min-w-[150px] flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Certification ${index + 1}`}
              className="h-[100px] shadow-[0px_15px_30px_0px_rgba(65,94,148,0.1)]"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Certifications;
