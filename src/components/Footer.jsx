import React from "react";
import logo from "../assets/f_logo.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#000526]">
      <footer className="footer text-base lg:footer-horizontal max-w-[1250px] mx-auto text-white px-4 pb-10 pt-20">
        <div>
          <img src={logo} alt="" className="max-w-48" />
          <p className="mt-12">
            Hong Kong SAR Headquarters, 9th Floor, <br /> EGL Tower, 83 Hung To
            Road, Kwun Tong, <br /> Kowloon, Hong Kong SAR.
          </p>
        </div>
        <nav>
          <h6 className="footer-title opacity-100 mb-8 capitalize tracking-[1.6px]">
            Our Company
          </h6>
          <a className="link hover:text-[#0367bf] no-underline">About Us</a>
          <NavLink to="/our-people" className="link hover:text-[#0367bf] no-underline">Our People</NavLink>
          <a className="link hover:text-[#0367bf] no-underline">Our Capabilities</a>
          <a className="link hover:text-[#0367bf] no-underline">Sustainability</a>
          <a className="link hover:text-[#0367bf] no-underline">Showroom</a>
          <a className="link hover:text-[#0367bf] no-underline">Epic Brand Values</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100 mb-8 capitalize tracking-[1.6px]">
            Our Capabilities
          </h6>
          <a className="link hover:text-[#0367bf] no-underline">Privacy Policy</a>
          <a className="link hover:text-[#0367bf] no-underline">Terms of Use</a>
          <a className="link hover:text-[#0367bf] no-underline">Code of Conduct</a>
          <a className="link hover:text-[#0367bf] no-underline">Reports and Downloads</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100 mb-8 capitalize tracking-[1.6px]">
            Contact Us
          </h6>
          <a className="link no-underline text-sm">Tel: +852 3512 0800</a>
          <a className="link no-underline text-sm">Fax: +852 2345 8558</a>
          <a className="link no-underline text-sm">info@epichk.com</a>
          <a className="link no-underline text-sm">communications@epichk.com</a>

          <h6 className="footer-title opacity-100 mb-3 text-sm tracking-[1.6px] mt-10">
            follow Us
          </h6>
          <div className="flex items-center gap-8">
            <a className="link hover:text-[#0367bf] no-underline text-3xl">
              <FaLinkedin />
            </a>
            <a className="link hover:text-[#0367bf] no-underline text-3xl">
              <FaFacebookSquare />
            </a>
            <a className="link hover:text-[#0367bf] no-underline text-3xl">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer bg-[#000526] px-4 p-10 pt-0 max-w-[1250px] mx-auto">
        <span className="border-[#ffffff29] border-t w-full" ></span>
        <aside className="grid-flow-col items-center text-white">
        
          <p>
            
© 2025 Epic Group. All Rights Reserved.
          </p>
        </aside>
       
      </footer>
    </div>
  );
}

export default Footer;
