import React, { Component } from 'react';
import IMG1 from'../../Assets/linkedin_clone.PNG';
import peripheralGif from '../../Assets/peripheral.gif';
import VEHICLE from '../../Assets/vehicle.PNG';
import PIMS from '../../Assets/PIMS.PNG';
import './portfolio.css';

class Portfolio extends Component {
    state = {  } 
    render() { 
        return (
        <section id="portfolio">
            <h5>My Recent works</h5>
            <h2>Portfolio</h2>
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
                            <a href="https://sensometer.mdsakiluzzaman.com" target='_blank' className="button button-primary">Live Demo</a>
                        </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={VEHICLE} alt=""></img>
                    </div>
                        <h3>Vehicle Tracking System</h3>
                        <div className="portfolio__item-cta">
                            {/* <a href="https://github.com" className="button"  >Github</a> */}
                            <a href="https://vehicle.mdsakiluzzaman.com" className="button button-primary" target='_blank'>Live Demo</a>
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
                        <img src={PIMS} alt=""></img>
                    </div>
                        <h3>Asset Tracking System</h3>
                        <div className="portfolio__item-cta">
                            {/* <a href="https://github.com" className="button" target='_blank'>Github</a> */}
                            {/* <a href="https://github.com" className="button button-primary" target='_blank'>Live Demo</a> */}
                        </div>
                </article>
                
               
            </div>
        </section>);
    }
}
 
export default Portfolio;