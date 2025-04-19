import React from "react";
import "./Footer.css";
import logo2 from "/src/assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faSquareFacebook,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={logo2} alt="" />
          <p>
            Vị ngon tinh tế từ Nhật Bản SushiGo mang đến trải nghiệm ẩm thực
            Nhật Bản đích thực với nguyên liệu tươi sạch, chế biến tỉ mỉ và
            hương vị độc đáo. Đặt hàng nhanh chóng – giao hàng tận nơi.{" "}
          </p>
          <div className="footer-social-icons">
            <FontAwesomeIcon icon={faSquareFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faTwitterSquare} className="social-icon" />
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2> COMPANY </h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0767537826</li>
            <li>contact@haducanh.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Ha Duc Anh @2025 </p>
    </div>
  );
};

export default Footer;
