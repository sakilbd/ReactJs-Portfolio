import React, { Component } from 'react';
import IMG1 from'../../Assets/linkedin_clone.PNG';
import './portfolio.css';

class Portfolio extends Component {
    state = {  } 
    render() { 
        return (
        <section id="portfolio">
            <h5>My Recent works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""></img>
                    </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com" className="button" target='_blank'>Github</a>
                            <a href="https://github.com" className="button button-primary">Live Demo</a>
                        </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""></img>
                    </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com" className="button" target='_blank'>Github</a>
                            <a href="https://github.com" className="button button-primary">Live Demo</a>
                        </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""></img>
                    </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com" className="button" target='_blank'>Github</a>
                            <a href="https://github.com" className="button button-primary">Live Demo</a>
                        </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""></img>
                    </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com" className="button" target='_blank'>Github</a>
                            <a href="https://github.com" className="button button-primary">Live Demo</a>
                        </div>
                </article>
               
            </div>
        </section>);
    }
}
 
export default Portfolio;