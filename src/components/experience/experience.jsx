import React from "react";
import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";
const experience = () => {
  return (
    <section id="experience">
      <h5>Skills I've</h5>
      <h2>My Experience</h2>

      {/* FrontEnd  */}

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            <article className="experience-details">
              <div className="exp_icon_container" >
                <AiFillCheckCircle className="experience_details-icon"/>
                <h4>HTML</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience-details">
            <div className="exp_icon_container" >
                <AiFillCheckCircle className="experience_details-icon" />
                <h4>CSS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience-details">
            <div className="exp_icon_container" >
                <AiFillCheckCircle className="experience_details-icon"/>
                <h4>JS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience-details">
            <div className="exp_icon_container" >
                <AiFillCheckCircle className="experience_details-icon"/>
                <h4>React</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience-details">
            <div className="exp_icon_container" >
                <AiFillCheckCircle className="experience_details-icon"/>
                <h4>TailWind CSS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* FrontEnd Ends */}

        {/* Backend Starts */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience-details">
            <div className="exp_icon_container" >
                <AiFillCheckCircle className="experience_details-icon"/>
                <h4>NodeJS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience-details">
            <div className="exp_icon_container" >
                <AiFillCheckCircle className="experience_details-icon"/>
                <h4>MongoDB</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience-details">
            <div className="exp_icon_container" >
                <AiFillCheckCircle className="experience_details-icon"/>
                <h4>MySQL</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* Backend Starts */}
      </div>
    </section>
  );
};

export default experience;
