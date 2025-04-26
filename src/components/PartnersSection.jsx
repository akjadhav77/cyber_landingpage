import React from "react";
import styles from "./PartnersSection.module.css";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";

const partners = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
];

const PartnersSection = () => {
  return (
    <section className={styles.partners} id="partners">
      <h2>Trusted By Leading Companies</h2>
      <div className={styles.logoGrid}>
        {partners.map((logo, index) => (
          <div key={index} className={styles.logoItem}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
