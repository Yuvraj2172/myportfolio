import React from "react";
import "./about.css";
import ABOUTME from "../../assets/me-about.jpg";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { FiAward, FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";
const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ABOUTME} alt="aboutimage" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>Currently an Explorer</small>
            </article>
            <article className="about_card">
              <AiOutlineFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Years</small>
            </article>
          </div>
          <p className="about_content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quisquam
            iure voluptas magni beatae ducimus harum repudiandae quis eos
            eveniet rem esse inventore similique amet fuga minus, quasi neque
            totam iusto reiciendis architecto autem. Quaerat!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
