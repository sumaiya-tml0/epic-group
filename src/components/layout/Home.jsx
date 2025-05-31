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
        <section className="max-w-[1250px] mx-auto">
          <About />
        </section>
      </main>
      <Sustainability />
      <Latest />
      <Certifications />
    </>
  );
}
