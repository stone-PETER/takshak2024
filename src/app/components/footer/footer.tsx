"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="social">
      <div className="info-container">
        <div className="image-text-container">
          <img src="/logo.png" className="social-image" alt="Logo" />
        </div>
        <div className="contact-info">
          <p className="college-name">
            <br />
            Mar Athanasius College of Engineering <br />
            Kothamangalam <br />
            Kerala <br />
            India <br />
            686666 <br />
            <a href="mailto:support@takshak.in" className="email-link">
              support@takshak.in
            </a>
          </p>
        </div>
      </div>

      <div className="icon-container">
        <p className="follow">Follow us</p>
        <a href="#" className="social-icon" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" className="social-icon" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="#" className="social-icon" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="#" className="social-icon" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Footer;
