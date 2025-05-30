import React from "react";
import blueWater from "../../assets/aboutPage/blue-water.jpg";
import almaz from "../../assets/aboutPage/almaz.jpg";
import blogFin from "../../assets/aboutPage/blog-fin.jpg";
import SectionTitle from "../shared/Title";

const Stories = () => {
  const stories = [
    {
      title: "SAVING BLUE WATER",
      image: blueWater, // Replace with actual image paths
    },
    {
      title: "OUR EPIC WOMEN",
      image: almaz,
    },
    {
      title: "MICRO FACTORIES",
      image: blogFin,
    },
  ];
  return (
    <div className="text-black pt-10 pb-20">
      <div className="max-w-[1250px] mx-auto px-4">
        <SectionTitle
          title="Our Better Stories."
          subTitle="Let’s see the Relentless Pursuit of Better in practise."
        />

        {/* Flip Cards */}
        <div className="grid lg:grid-cols-3 flex-wrap justify-center gap-8 mt-9">
          {stories.map((story, index) => (
            <div
              key={index}
              className="w-[278px] md:w-[730px] lg:w-full h-[300px] perspective-[1200px]"
            >
              <div className="relative w-full h-full duration-700 transform-style-preserve-3d hover:-rotate-x-180">
                {/* Front */}
                <div
                  className="absolute w-full h-full backface-hidden rounded-t-md overflow-hidden bg-cover bg-center flex items-end p-4 pb-10 text-white text-lg font-bold justify-center "
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgb(24,27,49) 0%, rgba(24,27,49,0) 75%), url(${story.image})`,
                  }}
                >
                  <h1 className="text-2xl text-center uppercase">
                    {story.title}
                  </h1>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-x-180 bg-[#1e2f69] rounded-md shadow-[0_40px_60px_rgba(0,0,0,0.12)] flex items-center justify-center pointer-events-auto">
                  <a href="#">
                    <button className="bg-white text-[#1a3b91] font-medium px-11 py-5 rounded shadow cursor-pointer transition duration-300 transform hover:-translate-y-0.5  hover:bg-[#1a3b91] hover:text-white hover:drop-shadow-2xl">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
