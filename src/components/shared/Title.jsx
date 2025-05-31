import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center text-center text-black">
      <h3 className="mb-3 lg:mb-5 text-3xl lg:text-5xl text-[#1a3b91] font-bold capitalize">
        {title}
      </h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
