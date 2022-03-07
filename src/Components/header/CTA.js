import React, { Component } from 'react';
import CV from '../../Assets/cv.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';


class CTA extends Component {
    state = {  } 
    render() { 
        return (
            <div className="cta">
                <a href={CV} download className="btn btn-secondary ">Download CV</a>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        );
    }
}
 

export default CTA ;