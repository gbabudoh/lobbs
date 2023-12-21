import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already responded to the cookie banner.
        const hasResponded = getCookie('cookie-response');
        if (!hasResponded) {
            setIsVisible(true);
        }
    }, []);

    const handleResponse = (response) => {
        // Save the user's response in a cookie
        setCookie('cookie-response', response, 365);  // The cookie will expire in 365 days

        // Add the 'hidden' class to start the fade-out transition
        document.querySelector('.cookie-banner').classList.add('hidden');

        // Set the state to hide the banner after the transition duration (in this case 0.3s)
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const setCookie = (cname, cvalue, exdays) => {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <p>We use cookies to ensure the best experience on our website. By continuing, you agree to our use of cookies.</p>
            <div className="cookie-actions">
                <button onClick={() => handleResponse('rejected')} className="reject">REJECT</button>
                <button onClick={() => handleResponse('accepted')} className="accept">ACCEPT</button>
            </div>
        </div>
    );
}

export default CookieBanner;
