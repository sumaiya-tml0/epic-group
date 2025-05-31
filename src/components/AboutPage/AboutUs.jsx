import React from "react";
import img from "../../assets/aboutPage/1.png";

export default function AboutUs() {
  return (
    <div className="px-4">
      <div className="px-4 md:px-5 py-14 lg:px-18 lg:py-16">
        <div className="flex flex-col gap-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="mb-8 text-3xl lg:text-5xl text-[#1a3b91] font-bold capitalize">
              About us
            </h3>
            <div className="text-black space-y-3">
              <p>
                For over decades, Epic Group has been a key player in the
                apparel industry - first as a major textiles trading house, then
                as a leader in sourcing quality fabrics, and since 2005 as a
                state-of-the-art manufacturing company with facilities in
                Bangladesh, Jordan, and Ethiopia. Our evolution speaks to our
                core principle - to relentlessly pursue better.
              </p>
              <p>
                This means that we are dedicated to seeking out ever higher
                standards in everything we do, from world-class apparel
                manufacturing and design services to innovative machinery that
                enables us to reach increasingly better environmental
                sustainability targets.
              </p>
              <p>
                By combining speed, efficiency, technology, design and
                innovation we meet ever-changing market trends and our
                customers' demands with unfailing reliability.
              </p>
              <p>
                Our services include a cutting-edge New York design studio to
                help turn your fashion ideas into a manufacturing reality, plus
                value-added investment opportunities.
              </p>
              <p>
                Over the decades we've built up a solid and loyal,
                international, customer base founded on our commitment to
                partnerships, mutual trust and professional respect.
              </p>
            </div>
          </div>

          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
