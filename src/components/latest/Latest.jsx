import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

import img1 from "../../assets/latest/steelSupply.jpeg";
import img2 from "../../assets/latest/Interview.png";
import img3 from "../../assets/latest/creativeGP.png";
import img4 from "../../assets/latest/twitter.png";
import { IoIosArrowForward } from "react-icons/io";

gsap.registerPlugin(Draggable);

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
    title: "Global Creative Partnership Announced",
    excerpt:
      "Epic Group collaborates with leading designers to drive innovation in the fashion supply chain.",
    category: "Epic Global",
  },
  {
    id: 4,
    img: img4,
    title: "Epic’s Impact Shared on Twitter Trends",
    excerpt:
      "Epic's sustainability initiatives gained significant attention on social media this quarter.",
    category: "Epic Global",
  },
];

function Latest() {
  const containerRef = useRef(null);
  const proxyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 570 + 48; // 618
  const visibleCards = 2;
  const slideWidth = cardWidth * visibleCards;
  const totalSlides = Math.ceil(items.length / visibleCards);
  const maxX = -(cardWidth * (items.length - visibleCards));

  useEffect(() => {
    const container = containerRef.current;
    const proxy = proxyRef.current;

    const maxX = -(cardWidth * (items.length - visibleCards));

    const draggable = Draggable.create(proxy, {
      type: "x",
      bounds: { minX: maxX, maxX: 0 },
      inertia: true,
      snap: (value) => {
        const snapped = Math.round(value / slideWidth) * slideWidth;
        const clamped = Math.max(maxX, Math.min(0, snapped));
        return clamped;
      },
      onDragEnd: function () {
        const slideIndex = Math.round(Math.abs(this.endX) / slideWidth);
        setActiveIndex(Math.min(slideIndex, totalSlides - 1));

        gsap.to(container, {
          x: this.endX,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    return () => {
      draggable[0].kill();
    };
  }, []);

  const handleDotClick = (index) => {
    const container = containerRef.current;
    const x = -(slideWidth * index);

    gsap.to(container, {
      x,
      duration: 0.5,
      ease: "power2.out",
    });

    setActiveIndex(index);
  };

  return (
    <section className="latest-from-epic py-10 px-6 relative overflow-hidden">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-4">
        The latest from Epic
      </h2>
      <p className="text-center text-blue-900 text-lg mb-10"><a href="" className="flex items-center gap-1 justify-center">Discover More <IoIosArrowForward /></a></p>
      </div>

      <div className="overflow-x-hidden relative max-w-[1250px] mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-12 w-max bg-[#f9f9fd] px-4 pb-8"
          ref={containerRef}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[250px] md:w-[570px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-black mb-2">{item.category}</p>
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-7">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Proxy draggable layer */}
        <div
          ref={proxyRef}
          className="absolute top-0 left-0 w-full h-full cursor-grab z-10"
        />
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === i ? "bg-blue-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Latest;
