import React, { useEffect, useState } from "react";
import team from "../../assets/aboutPage/team.jpg";
import team1 from "../../assets/aboutPage/team1.jpg";
import team2 from "../../assets/aboutPage/team2.jpg";
import team3 from "../../assets/aboutPage/team3.jpg";
import team4 from "../../assets/aboutPage/team4.jpg";
import team5 from "../../assets/aboutPage/team5.jpg";
import team6 from "../../assets/aboutPage/team6.jpg";
import team7 from "../../assets/aboutPage/team7.jpg";
import team8 from "../../assets/aboutPage/team8.jpg";
import team9 from "../../assets/aboutPage/team9.jpg";
import team10 from "../../assets/aboutPage/team10.jpg";
import team11 from "../../assets/aboutPage/team11.jpg";

export default function LeaderShip() {
   const teams =  [
  {
    "name": "Suraj Kakra",
    "designation": "Chief Executive Officer",
    "image": team1
  },
  {
    "name": "Anurag Asthana",
    "designation": "Chief Sales & Marketing Officer",
    "image": team2
  },
  {
    "name": "Justin Wong",
    "designation": "Chief Financial Officer",
    "image": team3
  },
  {
    "name": "Rajeev Singh",
    "designation": "Chief Human Resources Officer",
    "image": team4
  },
  {
    "name": "Peyush Kumar",
    "designation": "Chief Procurement Officer",
    "image": team5
  },
  {
    "name": "Helen Morris",
    "designation": "Group Legal Counsel",
    "image": team6
  },
  {
    "name": "Brian Doiou",
    "designation": "President – Design/Product Development",
    "image": team7
  },
  {
    "name": "Vilhura Rolopasunvee",
    "designation": "Head of Sustainability",
    "image": team8
  },
  {
    "name": "Mr. Khutubuddin Ahmed",
    "designation": "Advisor to the Board",
    "image": team9
  },
  {
    "name": "Phillip Marcovici",
    "designation": "Group Advisor",
    "image": team10
  },
  {
    "name": "Mr. Tanvir Ahmed",
    "designation": "Group Advisor",
    "image": team11
  }
]

  console.log(teams);
  return (
    <div className="bg-[#081f3f] text-white pt-16 pb-8">
      <div className="max-w-[1250px] mx-auto">
        <div className="px-4">
          <h2 className=" text-6xl font-bold text-center mb-8">
            Our Leadership Team
          </h2>
          <img src={team} alt="" />

          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="my-4 text-3xl">
                <strong>Our Management Team:</strong>
              </p>
              <p>
                <strong>Ranjan Mahtani,</strong> Founder & Chairman (centre),{" "}
                <br /> <strong>Dinesh Virwani</strong>(left) Executive Vice
                Chairman, <strong>Sunil Daryanani</strong>(right) Executive Vice
                Chairman,
              </p>
            </div>

            <div className="text-center space-y-3 mt-6">
              <p>
                A true veteran of the textile industry, EPIC Group Founder and
                Chairman, Ranjan Mahtani started in the industry as a teenager,
                cutting his cloth in India, Sri Lanka and Taiwan. Then in the
                early 1980s, on a business trip to Bangladesh, he recognised the
                true potential of that country and set up the biggest buying
                office in Bangladesh. From this moment the EPIC Group we know
                today started to take shape.
              </p>
              <p>
                After 15 years in Bangladesh, Mahtani established Epic’s
                Corporate HQ in Hong Kong along with its New York operations. He
                was joined by Sunil Daryanani and Dinesh Virwani in the early
                1990s, who led operations first in Bangladesh, and now in Hong
                Kong.
              </p>
              <p>
                Ranjan Mahtani has expanded EPIC from major buying operation to
                major manufacturing operation, with further expansion plans that
                include services Beyond Manufacturing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 items-center justify-center gap-x-24 gap-y-10">
              {teams.map((team, idx) => (
                <div>
                <figure>
                    <img src={team.image} className="w-full h-full object-cover"></img>
                </figure>
                <h3 className="mt-3 font-bold">{team.name} <br /> {team.designation}</h3>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
