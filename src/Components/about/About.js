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
                           {/* <img src={ME} alt="About Image"></img>     */}
                        </div>  
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className='about__card'>
                                <FaAward className='about__icon'/>
                                <h5>Experience</h5>
                                <small>1+ Years Working</small>
                            </article>
                        
                    
                    
                            <article className='about__card'>
                                <FiUsers className='about__icon'/>
                                <h5>Clients</h5>
                                <small>12+ Clients</small>
                            </article>
                        
                   
                    
                            <article className='about__card'>
                                <VscFolderLibrary className='about__icon'/>
                                <h5>Projects </h5>
                                <small>15+ Completed</small>
                            </article>
                        </div>
                   
                    <p>
                    A highly organised and efficient individual, whose thorough and precise approach to projects
                    has yielded excellent results. To build a career in a growing organization,where I can get the
                    opportunities to prove my abilities by accepting challenges, fulfilling the organization goal and
                    climb the career ladder through continuous learning and commitment
                    </p>
                    <a href="#contact" className="btn btn-primary"> Let's Talk</a>
                    </div>

                </div>
             </section>
        );
    }
}
 
export default About;