import React from 'react';
import './Distribution.css'; // Import the CSS file for this component
import iconImage from '../assets/images/logo/icon.png' // Update the path to your logo

const Distribution = () => {
  return (
    <div className="distribution-container">
      <div className="logo-container">
        <img src={iconImage} alt="Lobbs Logo" />
      </div>
      <div className="header-container">
        <h2>If You Want To Become A Distributor of Lobbs Juice Product</h2>
      </div>
      <div className="contact-info">
        <p>Please contact our sales team<br /><br />
          Lobbs sales team<br />
          sales@lobbs.net<br />
          Tel: 07814483083
        </p>
      </div>
    </div>
  );
}

export default Distribution;
