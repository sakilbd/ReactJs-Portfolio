import logo from './logo.svg';
import './index.css';

import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import Experience from './Components/experience/Experience';
import About from './Components/about/About';
import Services from './Components/services/Services';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

import React, { Component } from 'react';


class App extends Component {
  
render(){ 
return (
  <>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  {/* <Services/> */}
  <Portfolio/>
  {/* <Testimonials/> */}
  <Contact/>
  <Footer/>
  </>
  );
}
}

export default App;
