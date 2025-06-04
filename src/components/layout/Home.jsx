import React from "react";
import Banner from "../banner/Banner";
import Sustainability from "../pages/HomePage/sustainablity/Sustainability";
import Latest from "../pages/HomePage/latest/Latest";
import Certifications from "../pages/HomePage/Certifications";
import About from "../pages/HomePage/about/About";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <Sustainability />
        <Latest />
        <Certifications />
      </main>
    </>
  );
}
