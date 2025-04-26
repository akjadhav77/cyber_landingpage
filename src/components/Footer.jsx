import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";


const Footer = () => {

    useEffect(() => {
        const footer = document.querySelector(".footer");
    
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const x = (clientX / window.innerWidth) * 100;
          const y = (clientY / window.innerHeight) * 100;
          footer.style.setProperty('--glow-x', `${x}%`);
          footer.style.setProperty('--glow-y', `${y}%`);
        };
    
        window.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);

  return (

    <motion.footer 
    initial={{ opacity: 0, y: 140 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo + Description */}
        <div className={styles.footerSection}>
          <h2 className={styles.logo}>CyberSecure</h2>
          <p>Stay safe from cyber threats with strong security measures.</p>
        </div>

        {/* About Us Links */}
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Review Us</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p><strong>Address:</strong> Satkhira, Kaliganj, BD</p>
          <p><strong>Email:</strong> test@test.com</p>
          <p><strong>Phone:</strong> +88 1234 5678</p>
        </div>

        {/* Follow Us Links */}
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.footerSection}>
          <h3>Newsletter</h3>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email..." />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
      <p className={styles.copyright}>© 2025 AKSHAY Inc. All Rights Reserved.</p>
    </motion.footer>
  );
}

    // <footer className={styles.footer}>
    //   <p>© 2025 AKSHAY Inc. All Rights Reserved.</p>
    // </footer>
  


export default Footer;
