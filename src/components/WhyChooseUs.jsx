import React from "react";
import styles from "./WhyChooseUs.module.css";
import { motion } from "framer-motion";
import whyChooseUsImage from "../assets/whyus01.png";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs} id="why-choose-us">
      <div className={styles.container}>
        <motion.div 
          className={styles.textSection}
          initial={{ opacity: 0, x: -85 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Why Businesses Choose Us</h2>
          <p>
            We help businesses develop resilience, protect against threats,
            and manage innovation with seamless IT support and consulting services.
          </p>
          <p>
            Our team has over 15 years of combined industry experience, offering practical solutions and 24/7 support.
          </p>
          <button className={styles.learnMoreBtn}>Learn More</button>
        </motion.div>

        <motion.div 
          className={styles.imageSection}
          initial={{ opacity: 0, x: 85 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={whyChooseUsImage} alt="Why Choose Us" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
