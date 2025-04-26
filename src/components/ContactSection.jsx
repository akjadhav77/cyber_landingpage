import React from "react";
import styles from "./ContactSection.module.css";
import { motion } from "framer-motion";
import contactImage from "../assets/contact.png";

const ContactSection = () => {
  return (
    <section className={styles.contact} id="contact">
      <motion.div
        initial={{ opacity: 0, x: -85 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={contactImage} alt="Contact Image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 85 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        <h2>Ready To Get Started?</h2>
        <p>Contact our team today and let's make something great together!</p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
