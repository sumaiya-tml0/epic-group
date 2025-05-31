import React from "react";
import SectionTitle from "../../shared/Title";
import location from "../../../assets/aboutPage/location.png";

const Location = () => {
  return (
    <div className="pt-9 pb-12">
      <div className="max-w-[1250px] mx-auto px-4">
        <SectionTitle
          title="Our Locations"
          subTitle="
Headquartered in Hong Kong, we have manufacturing facilities in Bangladesh, Ethiopia & Jordan, sales offices in HK, Dubai & New York, and designers in the New York, Hong Kong & London."
        />
        <div className="pt-12">
          <img src={location} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Location;
