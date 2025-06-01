import React from "react";
import AboutUs from "../pages/AboutPage/AboutUs";
import LeaderShip from "../pages/AboutPage/LeaderShip";
import Purpose from "../pages/AboutPage/Purpose";
import Timeline from "../pages/AboutPage/Timeline";
import Stories from "../pages/AboutPage/Stories";
import Location from "../pages/AboutPage/Location";
import Clients from "../pages/AboutPage/Clients";

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
