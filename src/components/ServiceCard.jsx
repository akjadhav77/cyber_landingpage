import React from "react";
import styles from "./ServiceCard.module.css";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
