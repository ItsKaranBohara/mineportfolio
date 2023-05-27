import React from "react";
import "./testimonials.css";
import AVTR from "../../assets/avatar.png";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

// import "swiper/css/pagination";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const data = [
  {
    avatar: AVTR,
    name: "Karan Bohara",
    review:
      "I had the pleasure of working with Karan on a web development project, and I can confidently say that he is a skilled and professional developer.Karan's attention to detail and problem-solving skills were particularly impressive. He was able to quickly understand the project requirements and provide innovative solutions to complex problems. He also demonstrated excellent communication skills throughout the project, ensuring that all stakeholders were kept informed of progress and any potential issues.",
  },
  {
    avatar: AVTR,
    name: " Bohara",
    review:
      "I had the pleasure of working with Karan on a web development project, and I can confidently say that he is a skilled and professional developer.Karan's attention to detail and problem-solving skills were particularly impressive. He was able to quickly understand the project requirements and provide innovative solutions to complex problems. He also demonstrated excellent communication skills throughout the project, ensuring that all stakeholders were kept informed of progress and any potential issues.",
  },
  {
    avatar: AVTR,
    name: "K Bohara",
    review:
      "I had the pleasure of working with Karan on a web development project, and I can confidently say that he is a skilled and professional developer.Karan's attention to detail and problem-solving skills were particularly impressive. He was able to quickly understand the project requirements and provide innovative solutions to complex problems. He also demonstrated excellent communication skills throughout the project, ensuring that all stakeholders were kept informed of progress and any potential issues.",
  },
  {
    avatar: AVTR,
    name: "Karan s Bohara",
    review:
      "I had the pleasure of working with Karan on a web development project, and I can confidently say that he is a skilled and professional developer.Karan's attention to detail and problem-solving skills were particularly impressive. He was able to quickly understand the project requirements and provide innovative solutions to complex problems. He also demonstrated excellent communication skills throughout the project, ensuring that all stakeholders were kept informed of progress and any potential issues.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review From client</h5>
      <h2>testimodial</h2>
      <Swiper
        className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review"> {review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
