import React from "react";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 85 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.textContainer}>
          <h1>
            Reliable <span className={styles.highlight}>Cyber Security</span>{" "}
            <br />
            and IT Support for{" "}
            <span className={styles.highlight2}>Businesses</span>
          </h1>
          <p className={styles.subtext}>
            Managed IT Services means never having to worry about your
            technology again.
          </p>
        </div>
        <button className={styles.ctaButton}>Schedule a 15 Min Call</button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
