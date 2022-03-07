import React, { Component } from 'react';
import './header.css';
import CTA from './CTA.js';
import ME from '../../Assets/me.jpg'
import HeaderSocials from './HeaderSocials';

class Header extends Component {
    state = {  } 
    render() { 
        return (
        <header>
            <div className="container header__container">
               <h5>Hello I'm</h5>
               <h1>John</h1>
               <h5 className="text-light">Singer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME}></img>
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
                
            </div>
        </header>
            );
    }
}
 
export default Header;