import React, { useState } from "react";
import styles from "./FaqItem.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.faqItem}>
        <button className={styles.question} onClick={toggleOpen}>
          {question}
          <FaChevronDown
            className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.answer}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FaqItem;
