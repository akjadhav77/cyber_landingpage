import React from "react";
import styles from "./FaqSection.module.css";
import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "What industries do you support?",
    answer: "We support all industries including healthcare, finance, legal, and e-commerce.",
  },
  {
    question: "What is included in your cybersecurity services?",
    answer: "Risk assessments, vulnerability scans, firewall protection, employee training, and incident response plans.",
  },
  {
    question: "How fast is your response time?",
    answer: "Our average response time is under 30 minutes for critical issues.",
  },
  {
    question: "Do you offer 24/7 monitoring?",
    answer: "Yes, we offer round-the-clock monitoring and alerting services.",
  },
];

const FaqSection = () => {
  return (
    <section className={styles.faq} id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
