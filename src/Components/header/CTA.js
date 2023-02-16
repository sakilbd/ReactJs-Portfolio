import React, { Component } from 'react';
// import CV from '../../Assets/cv.pdf';
import CV from '../../Assets/Md_Sakiluzzaman_resume_Software Associate.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';


class CTA extends Component {
    state = {  } 
    render() { 
        return (
            <div className="cta">
                <a href={CV} download="Md_Sakiluzzaman_resume_Software_Associate.pdf" className="button " >Download CV</a>
                <a href="#contact" className="button button-primary">Let's Talk</a>
            </div>
        );
    }
}
 

export default CTA ;