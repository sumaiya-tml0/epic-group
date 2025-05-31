import React from "react";
import bg from "../../../../assets/GradientBG.png";
import video from "../../../../assets/video.mp4";

import recycledIcon from "../../../../assets/fabrics.png";
import waterIcon from "../../../../assets/water.png";
import energyIcon from "../../../../assets/energy.png";
import ImageOverlayCard from "./ImageOverlayCard";

import capabilitiesImg from "../../../../assets/1.png";
import peopleImg from "../../../../assets/people.JPG";
import showroomImg from "../../../../assets/OurShowroom.png";

function Sustainability() {
  return (
    <div>
      <div
        className="pt-20 pb-48"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1250px] mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-6">
            <div className="space-y-6 md:w-1/2 justify-items-center lg:justify-items-start">
              <div className="badge bg-white uppercase font-bold text-black">
                sustainability
              </div>
              <h1 className="text-4xl lg:text-5xl text-white font-bold text-center lg:text-left">
                Better Company,
                <br /> Better World.
              </h1>
              <p className="text-white text-center lg:text-left">
                At Epic Group, sustainability is woven into the fabric of our
                identity. Our commitment to ‘Better Company, Better World’ isn’t
                just a theme—it’s a call to action that guides every facet of
                our organization.
              </p>
              <button className="capitalize bg-white px-8 py-3.5 rounded-4xl cursor-pointer transition duration-300 transform hover:bg-[#284dae] text-[#284dae] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:text-white">
                learn more
              </button>
            </div>

            <div className="md:w-1/2">
              <video width="auto" height="auto" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 text-white text-center my-16 gap-10">
            <div>
              <img src={recycledIcon} alt="Recycled Icon" className="mx-auto" />
              <h2 className="text-4xl font-bold mb-5">9,957,852</h2>
              <p>Production Using Recycled Fabrics</p>
            </div>
            <div>
              <img src={waterIcon} alt="Water Icon" className="mx-auto" />
              <h2 className="text-4xl font-bold mb-5">83,432 m³</h2>
              <p>Water Savings</p>
            </div>
            <div>
              <img src={energyIcon} alt="Energy Icon" className="mx-auto" />
              <h2 className="text-4xl font-bold mb-5">346,135 kWh</h2>
              <p>Renewable Energy Produced</p>
            </div>
          </div>
        </div>
        {/* Cards Section */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[1250px] mx-auto px-4">
        <ImageOverlayCard image={capabilitiesImg} title="Capabilities" />
        <ImageOverlayCard image={peopleImg} title="People" />
        <ImageOverlayCard image={showroomImg} title="Showroom" />
      </div>
    </div>
  );
}

export default Sustainability;
