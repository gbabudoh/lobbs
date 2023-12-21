import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-col" id="social-media-col">
                <a href="https://www.facebook.com/profile.php?id=61554219214708" target="_blank" rel="noopener noreferrer" aria-label="Facebook Link">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer" aria-label="Instagram Link">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube Link">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
            <div className="footer-col" id="links-col">
                <a href="/our-story">Our Story</a>
                <a href="/our-juices">Our Juices</a>
                <a href="/our-focus">Our Focus</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="footer-col" id="info-col">
                <a href="where-to-buy/">Where to Buy Lobbs</a>
                <a href="/distribution">Distribution</a>
                <a href="mailto:email@example.com">Email: info@lobbs.net</a>
                <p className='p-tel'>Tel: (+44) 781 448 3083</p>
            </div>
        </div>
    );
}

export default Footer;
