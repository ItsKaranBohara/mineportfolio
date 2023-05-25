import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>User interface design.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>User experience design.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Design systems and style guides.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive design.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Animation and motion design.</p>
            </li>
          </ul>
        </article>
        {/* end of ui ux */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Front-end web development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Back-end web development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>E-commerce development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Web application development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Database development and managemen.</p>
            </li>
          </ul>
        </article>
        {/* end of web development*/}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Blog post writing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Social media content creation.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>E-book and whitepaper creation.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Content distribution and promotion.</p>
            </li>
          </ul>
        </article>
        {/* end of content creation*/}
      </div>
    </section>
  );
};
export default Services;
