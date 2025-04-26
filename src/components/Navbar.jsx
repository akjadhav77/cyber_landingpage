// import React, { useEffect, useState } from "react";
// import styles from "./Navbar.module.css";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
//       <div className={styles.navbarContainer}>
//         <div className={styles.logo}>CyberSecure</div>
//         <ul className={styles.navLinks}>
//           <li>Home</li>
//           <li>Services</li>
//           <li>Pricing</li>
//           <li>Contact</li>
//           <li>About</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState } from "react";
// import styles from "./Navbar.module.css";
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navbarContainer}>
//         <div className={styles.logo}>CyberSecure</div>

//         <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>

//         <div className={styles.hamburger} onClick={toggleMenu}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </div>
//     </nav>
//   );
// }


import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ADD this state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>CyberSecure</div>

        {/* Add hamburger menu */}
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        {/* Add active class based on menuOpen */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>Services</li>
          <li onClick={() => setMenuOpen(false)}>About</li>
          <li onClick={() => setMenuOpen(false)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

