import React from "react";
import styles from "./ServicesSection.module.css";
import ServiceCard from "./ServiceCard";

import { FaShieldAlt, FaServer, FaLaptopCode, FaGlobe } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: FaShieldAlt,
      title: "Cyber Security",
      description: "Protect your business from cyber threats with advanced security solutions.",
    },
    {
      icon: FaServer,
      title: "Managed Service Provider",
      description: "Reliable IT support and infrastructure management for businesses.",
    },
    {
      icon: FaLaptopCode,
      title: "IT Consulting",
      description: "Strategic consulting to optimize your IT operations and boost productivity.",
    },
    {
      icon: FaGlobe,
      title: "Website Development",
      description: "Modern and responsive websites tailored to your business needs.",
    },
  ];

  return (
    <section className={styles.services} id="services">
      <h2 className={styles.title}>What We Offer</h2>
      <div className={styles.cardsGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
