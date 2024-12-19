import React, { useState, useEffect, useCallback } from "react"; // Importing necessary hooks from React
import { Link } from "react-router-dom"; // Importing Link component for navigation
import styles from "./Header.module.css"; // Importing CSS modules for styling

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the page is scrolled
  const [menuVisible, setMenuVisible] = useState(false); // State to control visibility of the mobile menu

  // Function to handle scroll event and update the state based on scroll position
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      // If the scroll position is more than 50px, mark as scrolled
      setIsScrolled(true);
    } else {
      setIsScrolled(false); // Otherwise, set as not scrolled
    }
  }, []);

  // Setting up the scroll event listener on mount and cleaning up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Adding the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleaning up the event listener on unmount
    };
  }, [handleScroll]);

  // Function to toggle the visibility of the mobile menu
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev); // Toggle the menu visibility state
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {" "}
      {/* Apply styles based on scroll */}
      <div className={styles.logo}>IMPORT EXPORT</div> {/* Logo Section */}
      {/* Navigation links */}
      <nav className={`${styles.nav} ${menuVisible ? styles.show : ""}`}>
        <Link to="/" className={styles.link}>
          Home
        </Link>{" "}
        {/* Home Link */}
        <Link to="/ourwork" className={styles.link}>
          About
        </Link>{" "}
        {/* About Link */}
        {/* Dropdown menu for Services */}
        <div className={styles.dropdown}>
          <Link to="/services" className={styles.link}>
            Services
          </Link>
          <div className={styles.dropdownMenu}>
            <ul>
              <li className={styles.dropdownItem}>Air</li>
              <li className={styles.dropdownItem}>Road</li>
              <li className={styles.dropdownItem}>Train</li>
              <li className={styles.dropdownItem}>Ocean</li>
            </ul>
          </div>
        </div>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>{" "}
        {/* Contact Link */}
        <Link to="/ourwork" className={styles.link}>
          Track Order
        </Link>{" "}
        {/* Track Order Link */}
      </nav>
      {/* Login / SignUp button */}
      <button className={styles.ctaButton}>Login / SignUp</button>
      {/* Mobile menu toggle button */}
      <div className={styles.togglerBtn} onClick={toggleMenu}>
        <div className={styles.chamchamchampa}></div>
        <div className={styles.chamchamchampa}></div>
        <div className={styles.chamchamchampa}></div>
      </div>
    </header>
  );
};

export default Header;
