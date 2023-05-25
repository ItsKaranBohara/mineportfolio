import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_Frontend">
          <h3>Frontend Development</h3>
          <div className="ecperience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <h4>Javascript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* end of frontend */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="ecperience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
