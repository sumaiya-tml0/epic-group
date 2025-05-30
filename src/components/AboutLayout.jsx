import React from "react";
import AboutUs from "./AboutPage/AboutUs";
import LeaderShip from "./AboutPage/LeaderShip";
import Purpose from "./AboutPage/Purpose";
import Timeline from "./AboutPage/Timeline";
import Stories from "./AboutPage/Stories";
import Location from "./AboutPage/Location";
import Clients from "./AboutPage/Clients";

export default function AboutLayout() {
  return (
    <>
      <section className="max-w-[1250px] mx-auto lg:pt-10">
        <AboutUs />
      </section>
      <LeaderShip />
      <Timeline />
      <Purpose />
      <Stories />
      <Clients />
      <Location />
    </>
  );
}
