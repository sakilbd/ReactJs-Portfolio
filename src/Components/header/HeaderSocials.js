import React, { Component } from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

class HeaderSocials extends Component {
    state = {  } 
    render() { 
        return (
            <div className="header__socials">
                <a href="https://linkedin.com"><BsLinkedin/></a> 
                <a href="https://github.com/sakilbd"><BsGithub/></a>    
                   
   
            </div>
        );
    }
}
 
export default HeaderSocials;