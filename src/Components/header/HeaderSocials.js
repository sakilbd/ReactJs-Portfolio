import React, { Component } from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si';
import {IoLogoCss3} from 'react-icons/io'



class HeaderSocials extends Component {
    state = {  } 
    render() { 
        return (
            <div className="header__socials">
                <a href="https://github.com/sakilbd" target="_blank"><SiLeetcode/></a>  
                <a href="https://cssbattle.dev/player/sakilbd" target="_blank"><IoLogoCss3/></a>  
                <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a> 
                <a href="https://github.com/sakilbd" target="_blank"><BsGithub/></a>  
            </div>
        );
    }
}
 
export default HeaderSocials;