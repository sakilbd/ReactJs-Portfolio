import React, { Component } from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {BiBookAlt} from 'react-icons/bi';
import {FiUser} from 'react-icons/fi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDots} from 'react-icons/bi';
import './nav.css';
import {useState} from 'react';


const Nav = () => {
    const [activeNav ,setActiveNav] = useState("#")
    return ( 
            <nav>
                <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
                <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
                <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt/></a>
                <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
                <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDots/></a>
            </nav>
        );
    
}
 
export default Nav;