import React, { Component } from 'react';
import CV from '../../Assets/cv.pdf'

class CTA extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <a href={CV} download className="btn">Download CV</a>
                <a href="" className="btn">Let's Talk</a>
            </div>
        );
    }
}
 

export default CTA ;