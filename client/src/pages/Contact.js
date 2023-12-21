import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Logo from '../assets/images/logo/logo.png';

function Contact() {
    const [messageSent, setMessageSent] = useState(false);
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_user_id')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="page-wrapper">
            <div className="contact-wrapper">
                <div className="contact-container">
                    {messageSent && 
                        <div className="popup">
                            Thank you for your message, we will be in touch shortly
                        </div>
                    }
                    <div className="contact-left">
                        <div className="logo-container">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="info-container">
                            <h1>REACH US</h1>
                            <div>
                                <p>Phone: (44) 781 448 3083</p>
                                <p className='p-email'>Email: salesteam@lobbs.net</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form ref={form} onSubmit={handleSubmit}>
                            <input type="text" name="user_name" placeholder="Full name" required />
                            <input type="email" name="user_email" placeholder="Email address" required />
                            <select name="subject">
                                <option value="distribution">I want to Buy</option>
                                <option value="distribution">Request Distribution</option>
                                <option value="sell">Sell Lobbs</option>
                                <option value="inquiry">General Inquiry</option>
                            </select>
                            <textarea name="message" placeholder="Your message" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

