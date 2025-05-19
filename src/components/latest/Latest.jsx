import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from "gsap";
import Draggable from "gsap/Draggable";

import img1 from "../../assets/latest/steelSupply.jpeg";
import img2 from "../../assets/latest/Interview.png";
import img3 from "../../assets/latest/creativeGP.png";
import img4 from "../../assets/latest/twitter.png";
import img5 from "../../assets/latest/award.png";
import img6 from "../../assets/latest/membership.png";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const items = [
  {
    id: 1,
    img: img1,
    title:
      "India’s First Green Steel TMT : Epic Group Partners with ARS Steel and sentra.world",
    excerpt:
      "Bhubaneswar, Odisha, 25th March 2025- In a significant development for India’s construction sector and net-zero goals, ARS Steel has",
    category: "Epic Global",
  },
  {
    id: 2,
    img: img2,
    title: "Fibre2Fashion Interview with Suraj Kalra & Anurag Asthana",
    excerpt:
      "In a compelling interview with Fibre2Fashion, our CEO Suraj Kalra and Chief Sales & Marketing Officer Anurag Asthana shared deep",
    category: "Epic Global",
  },
  {
    id: 3,
    img: img3,
    title: "Strategic Joint Venture Announcement Between Epic Group and Creative Group",
    excerpt:
      "January 9, 2025 &#8211; In a significant development aimed at harnessing growth opportunities in India, Epic Group and Creative Group",
    category: "Epic Global",
  },
  {
    id: 4,
    img: img4,
    title: "Celebrating Three Years of Excellence at the Just Style Awards!",
    excerpt:
      "We are incredibly proud to share that for the 3rd consecutive year, Epic Group has been honored with 4 prestigiou",
    category: "Epic Global",
  },
  {
    id: 5,
    img: img5,
    title: "Epic Group Wins Hong Kong MPF Employer Award 2023-2024",
    excerpt:
      "Epic Group has been honoured with the Hong Kong &#8220;Best All-Round MPF Employer&#8221; Award at the Good MPF Employer Award",
    category: "Epic Global",
  },
  {
    id: 6,
    img: img6,
    title: "EPIC Group Reaches Leader Level in 2023 Cascale Membership",
    excerpt:
      "EPIC Group has reached the Leader Level for the 2023 Cascale Membership requirements cycle! This achievement underscores our commitment to",
    category: "Epic Global",
  },
];

function Latest() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="latest-from-epic py-10 px-6 relative overflow-hidden">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-4">
          The latest from Epic
        </h2>
        <p className="text-center text-blue-900 text-lg mb-10">
          <a href="" className="flex items-center gap-1 justify-center">
            Discover More <IoIosArrowForward />
          </a>
        </p>
      </div>

      <div className="slider-container max-w-[1250px] mx-auto">
        <Slider
          {...settings}
          className="gap-6 pr-2 md:pr-4 lg:pr-8 pb-8 bg-[#f9f9fd] cursor-grab"
        >
          {items.map((item) => (
            <div className="pl-2 md:pl-4 lg:pl-8">
              <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden md:min-h-[465px] lg:min-h-[500px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-black mb-2">{item.category}</p>
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-7">
                  {item.excerpt}
                </p>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Latest;
