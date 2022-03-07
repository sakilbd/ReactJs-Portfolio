import React, { Component } from 'react';
import './header.css';
import CTA from './CTA.js';

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
            </div>
        </header>
            );
    }
}
 
export default Header;