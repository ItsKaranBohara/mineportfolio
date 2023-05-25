import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfoli_item">
          <div className="portfolio_item-image">
            <img src={Img1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ItsKaranBohara" className="btn">
              Github
            </a>
            <a
              href="https://github.com/ItsKaranBohara"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfoli_item">
          <div className="portfolio_item-image">
            <img src={Img2} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ItsKaranBohara" className="btn">
              Github
            </a>
            <a
              href="https://github.com/ItsKaranBohara"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfoli_item">
          <div className="portfolio_item-image">
            <img src={Img3} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ItsKaranBohara" className="btn">
              Github
            </a>
            <a
              href="https://github.com/ItsKaranBohara"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
