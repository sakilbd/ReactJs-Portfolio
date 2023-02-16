import React, { Component, useState } from "react";
import IMG1 from "../../Assets/linkedin_clone.PNG";
import peripheralGif from "../../Assets/peripheral.gif";
import VEHICLE from "../../Assets/vehicle.PNG";
import PIMS from "../../Assets/PIMS.PNG";
import SPA1 from "../../Assets/spa1.PNG";
import SPA2 from "../../Assets/spa2.PNG";
import WAREHOUSE from "../../Assets/warehouse.gif";
import "./portfolio.css";

function Portfolio() {
  const [info, setInfo] = useState(false);
  console.log(info);

  //   state = {};

  return (
    <section id="portfolio">
      <h5>My Recent works</h5>
      <h2>Portfolio</h2>
      <div className={"features" + (info ? " show" : "")}>
        <div>
          <p>-feature one</p>
        </div>
      </div>

      <div id="open-modal" class="modal-window">
        <div>
          <a href="#portfolio" title="Close" class="modal-close">
            Close
          </a>
          <h1>Sensometer</h1>
          <div>
            A CSS-only modal based on the :target pseudo-class. Hope you find it
            helpful.
          </div>
          <div>
            <small>Check out 👇</small>
          </div>
          <a href="#portfolio" title="Close" class="modal-close">
            Close
          </a>
          <h1>Sensometer</h1>
          <div>
            A CSS-only modal based on the :target pseudo-class. Hope you find it
            helpful.
          </div>
          <div>
            <small>Check out 👇</small>
          </div>
          Your new favorite eyedropper tool!
        </div>
      </div>
      <div className="container portfolio__container">
        {/* <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""></img>
                    </div>
                        <h3>Linked In Clone</h3>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com" className="button" target='_blank'>Github</a>
                            <a href="https://github.com" className="button button-primary">Live Demo</a>
                        </div>
                </article> */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={peripheralGif} alt=""></img>
          </div>
          <h3>Sensometer</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com" className="button" target='_blank'>Github</a> */}
            <a
              href="https://sensometer.mdsakiluzzaman.com"
              target="_blank"
              className="button button-primary"
            >
              Live Demo
            </a>
            <a
              href="#open-modal"
              target="_blank"
              className="btn button button-primary"
              //   onClick={() => setInfo(!info)}
            //   onMouseOver={() => setInfo(!info)}
            //   onMouseOut={() => setInfo(!info)}
            >
              <a className="btn" href="#open-modal">
                Click for Features
              </a>
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={VEHICLE} alt=""></img>
          </div>
          <h3>Vehicle Tracking System</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com" className="button"  >Github</a> */}
            <a
              href="https://vehicle.mdsakiluzzaman.com"
              className="button button-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PIMS} alt=""></img>
          </div>
          <h3>Personal Information Management System</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com" className="button" target='_blank'>Github</a> */}
            {/* <a href="https://github.com" className="button button-primary" target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WAREHOUSE} alt=""></img>
          </div>
          <h3>Warehouse Management System</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com" className="button" target='_blank'>Github</a> */}
            <a
              href="https://www.youtube.com/watch?v=MNnKm9GoTnI&ab_channel=MdSakiluzzaman"
              className="button button-primary"
              target="_blank"
            >
              Demo Video
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SPA1} alt=""></img>
          </div>
          <h3>Single Page Application 1</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com" className="button" target='_blank'>Github</a> */}
            <a
              href="http://spa.mdsakiluzzaman.com/"
              className="button button-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SPA2} alt=""></img>
          </div>
          <h3>Single Page Application 2</h3>
          <div className="portfolio__item-cta">
            {/* <a href="https://github.com" className="button" target='_blank'>Github</a> */}
            <a
              href="http://spa.mdsakiluzzaman.com/spa2"
              className="button button-primary"
              target="_blank"
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
