import React from "react";
import "./Footer.css";
import LOGO from "../../assets/Images/Logo.png"
import { MdOutlineMail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="left-footer">

        
        <div className="footer-logo">
          <img src={LOGO} alt="Hubly Logo" />
          <h1>Hubly</h1>
        </div>

        </div>

        <div className="right-footer">

        <div className="footer-group">
          <h4>Product</h4>
          <ul>
            <li>Universal checkout</li>
            <li>Payment workflows</li>
            <li>Observability</li>
            <li>UpliftAI</li>
            <li>Apps & integrations</li>
          </ul>
        </div>

        <div className="footer-group">
          <h4>Why Primer</h4>
          <ul>
            <li>Expand to new markets</li>
            <li>Boost payment success</li>
            <li>Improve conversion rates</li>
            <li>Reduce payments fraud</li>
            <li>Recover revenue</li>
          </ul>
        </div>

        <div className="footer-group">
          <h4>Developers</h4>
          <ul>
            <li>Primer Docs</li>
            <li>API Reference</li>
            <li>Payment methods guide</li>
            <li>Service status</li>
            <li>Community</li>
          </ul>
        </div>

        <div className="footer-group">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Success stories</li>
            <li>News room</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="footer-group">
          <h4>Company</h4>
          <ul>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-bottom">
        <div className="footer-icons">
          <span><MdOutlineMail /></span>
          <span><SlSocialLinkedin /></span>
          <span><FiTwitter /></span>
          <span><FiYoutube /></span>
          <span><IoGameControllerOutline /></span>
          <span><FaFigma /></span>
          <span><FaInstagram /></span>
        </div>
      </div>

      


      </div>

      </div>
    </footer>
  );
}
