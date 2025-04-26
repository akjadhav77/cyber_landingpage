import React from "react";
import styles from "./TestimonialsCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ian",
    feedback: "Bytagig is the best IT company we've worked with! Their team is professional, responsive, and truly cares about our business.",
  },
  {
    name: "Grant",
    feedback: "Our IT systems have never been more secure and reliable. Highly recommend them for managed services!",
  },
  {
    name: "Sadie",
    feedback: "Their consulting helped us transform our IT infrastructure. Great experience from start to finish!",
  },
  {
    name: "Sabrina",
    feedback: "Incredible cybersecurity services. They really know how to protect businesses in this digital era!",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <h2>Recommendations From Past Customers</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={styles.testimonialCard}>
              <p>"{testimonial.feedback}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsCarousel;
