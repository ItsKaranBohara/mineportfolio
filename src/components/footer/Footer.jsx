import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Karan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Karan Singh Bohara.All rights reserve</small>
      </div>
    </footer>
  );
};

export default Footer;
