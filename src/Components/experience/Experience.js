import React, { Component } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

class Experience extends Component {
  state = {};
  render() {
    return (
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Developement</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>HTML5</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>CSS3</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>React Js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          {/* End of FrontEnd */}
          <div className="experience__backend">
            <h3>Backend Developement</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>Laravel</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>REST API</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
