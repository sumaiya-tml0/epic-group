import React from "react";

import img1 from "../../../assets/showroomPage/1.gif"
import img2 from "../../../assets/showroomPage/2.gif"
import img3 from "../../../assets/showroomPage/3.gif"
import img4 from "../../../assets/showroomPage/4.gif"
import img5 from "../../../assets/showroomPage/5.gif"
import img6 from "../../../assets/showroomPage/6.gif"
import img7 from "../../../assets/showroomPage/7.png"
import img8 from "../../../assets/showroomPage/8.png"
import img9 from "../../../assets/showroomPage/9.png"
import img10 from "../../../assets/showroomPage/10.png"
import img11 from "../../../assets/showroomPage/11.png"
import img12 from "../../../assets/showroomPage/12.png"

export default function Showroom() {
  const features = [
    {
      name: "Girls 2 Piece Shirt Set",
      image: img1,
    },
    {
      name: "Girls 2 Piece Dolman Top With Skirt Set",
      image: img2,
    },
    {
      name: "Girls 2 Piece Dolman Top With Skirt Set",
      image:img3,
    },
    {
      name: "Girls 2 Piece Ruffle Pant Set",
      image: img4,
    },
    {
      name: "Girls 2 Piece Ruffle Pant Set",
      image: img5,
    },
    {
      name: "Girls 2 Piece Ruffle Pant Set",
      image: img6,
    },
    {
      name: "Camo French Terry Set",
      image: img7,
    },
    {
      name: "Eco Chino & Knit Print Shirt",
      image: img8,
    },
    {
      name: "Printed Shirt & Chino Short",
      image: img9,
    },
    {
      name: "Resort Shirt Dip Dye & Camo Cargo",
      image: img10,
    },
    {
      name: "Rip & Repair Jeans & Printed Tee",
      image: img11,
    },
    {
      name: "Tie Dye Terry Cloth Set",
      image: img12,
    },
  ];

  return (
    <div>
      <div className="bg-[#fafafa] pt-28 pb-16">
        {" "}
        <h1 className="text-[32px] mb-4 font-bold text-black text-center capitalize">
          welcome to our showroom
        </h1>
      </div>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 md:gap-16 lg:gap-20 pt-9 pb-16 px-4">
        {features.map((feature, idx) => (
          <div className="flex flex-col items-center justify-center">
           <div className="w-[200px]">
             <img src={feature.image} alt="" />
           </div>
            <h3 className="text-center mb-5 font-bold text-black text-lg uppercase">{feature.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}
