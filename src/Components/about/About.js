import React, { Component } from 'react';
import ME from '../../Assets/about_me.PNG';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import './about.css';


class About extends Component {
    state = {  } 
    render() { 
        return (
            <section id="about">
                <h5>Get To Know</h5>    
                <h2>About Me</h2>
                <div className="container about__container">
                    <div className="about__me">
                        <div className='about__me__image'>
                           <img src={ME} alt="About Image"></img>    
                        </div>  
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className='about__card'>
                                <FaAward className='about__icon'/>
                                <h5>Experience</h5>
                                <small>2+ Years Working</small>
                            </article>
                        
                    
                    
                            <article className='about__card'>
                                <FiUsers className='about__icon'/>
                                <h5>Clients</h5>
                                <small>6+ Clients</small>
                            </article>
                        
                   
                    
                            <article className='about__card'>
                                <VscFolderLibrary className='about__icon'/>
                                <h5>Projects </h5>
                                <small>5+ Completed</small>
                            </article>
                        </div>
                   
                    <p>
                    Experienced software developer with a strong background in Laravel and ReactJS. Proficient in developing dynamic and scalable web applications with a focus on user experience. Adept at using modern web technologies to solve complex problems and deliver high-quality solutions. Committed to staying up-to-date with the latest development trends and best practices in the industry. Seeking a challenging role where I can utilize my skills and knowledge to contribute to the success of the organization.
                    </p>
                    <a href="#contact" className="button button-primary"> Let's Talk</a>
                    </div>

                </div>
             </section>
        );
    }
}
 
export default About;