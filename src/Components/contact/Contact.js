import React, { Component } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import Example from '../lottie/lottie';
class Contact extends Component {
    state = {  } 
    render() { 
        return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>mdsakiluzzaman@gmail.com</h5>
                        <a href="mailto:mdsakiluzzaman@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>মোঃ শাকিল </h5>
                        <a href="https://m.me/মোঃ শাকিল ">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>Md Sakiluzzaman</h5>
                        <a href="https://api.whatsapp.com/send?phone01749498898">Send a message</a>
                    </article>

                </div>
                <form >
                    <input type="text" name="name" placeholder="Your Full Name" required></input>
                    <input type="email" name="name" placeholder="Your Email" required></input>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="button button-primary">Send Message</button>

                </form>
                <div className="lottie">
                <Example/>
                </div>
            </div>
        </section >);
    }
}
 
export default Contact;