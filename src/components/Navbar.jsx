import React from "react";
// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import image from "../assets/profile.jpg";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 text-3xl text-thick cursor-pointer">Db</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
        <a
          href="https://www.linkedin.com/in/devrshi-bhavsar-934242305/"
          className="hover:scale-105 duration-200"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/ig-devrshi/"
          className="hover:scale-105 duration-200"
        ><FaGithub /></a>
        
        <a
          href="https://www.linkedin.com/in/devrshi-bhavsar-934242305/"
          className="hover:scale-105 duration-200"
        ><FaSquareTwitter /></a>
        
        <a
          href="https://www.instagram.com/__ig.devrshi.__?igsh=c3ZvbG4wczd2N3Nv"
          className="hover:scale-105 duration-200"
        ><FaInstagram /></a>
        
      </div>
    </nav>
  );
};

export default Navbar;
