import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuvraj2172" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/Yuvraj2172"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuvraj2172" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/Yuvraj2172"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuvraj2172" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/Yuvraj2172"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuvraj2172" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/Yuvraj2172"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuvraj2172" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/Yuvraj2172"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuvraj2172" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/Yuvraj2172"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
