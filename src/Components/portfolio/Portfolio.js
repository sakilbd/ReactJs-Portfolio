import React, { Component, useState } from "react";
import IMG1 from "../../Assets/linkedin_clone.PNG";
import peripheralGif from "../../Assets/peripheral.gif";
import VEHICLE from "../../Assets/vehicle.PNG";
import PIMS from "../../Assets/PIMS.PNG";
import SPA1 from "../../Assets/spa1.PNG";
import SPA2 from "../../Assets/spa2.PNG";
import WAREHOUSE from "../../Assets/warehouse.gif";
import { features } from "./Features";

import "./portfolio.css";

function Portfolio() {
  const [info, setInfo] = useState(false);
  const [section, setSection] = useState("");
const title ={
    sensometer:'Sensometer',
    vehicle:'Vehicle Tracking System',
    pims:'Personal Information Management System',
    warehouse:'Warehouse Management System',
 }

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
          <h1>{title[section]}</h1>
          <ul className="">
            {features[section]?.map((item) => {
              return (
                <>
                  <li>{item}</li>
                </>
              );
            })}
          </ul>
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
              className="button button-seconday"
              onClick={() => setSection("sensometer")}
            >
              Features
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
            <a
              href="#open-modal"
              className="button button-seconday"
              onClick={() => setSection("vehicle")}
            >
              Features
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
            <a
              href="#open-modal"
              className="button button-seconday"
              onClick={() => setSection("pims")}
            >
              Features
            </a>
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
            <a
              href="#open-modal"
              className="button button-seconday"
              onClick={() => setSection("warehouse")}
            >
              Features
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
