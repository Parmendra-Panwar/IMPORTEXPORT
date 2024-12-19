import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.column}>
          <h2 className={styles.logo}>IMPORT EXPORT</h2>
          <p>
            Your trusted partner for worldwide logistics and transportation.
          </p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Your Email Address" />
            <button>
              <FaPaperPlane />
            </button>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={styles.column}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.animatedList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">User Login</a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className={styles.column}>
          <h3 className={styles.sectionTitle}>Services</h3>
          <ul className={styles.animatedList}>
            <li>
              <a href="#">Air</a>
            </li>
            <li>
              <a href="#">Road</a>
            </li>
            <li>
              <a href="#">Train</a>
            </li>
            <li>
              <a href="#">Ocean</a>
            </li>
          </ul>
        </div>

        {/* Legal & Social Media Section */}
        <div className={styles.column}>
          <h3 className={styles.sectionTitle}>Legal</h3>
          <ul className={styles.animatedList}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} Import Export | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
