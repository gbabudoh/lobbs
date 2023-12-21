import React from 'react';
import './WhereToBuy.css'; // Import the CSS file for this component
import iconImage from '../assets/images/logo/icon.png' // Update the path to your logo

const WhereToBuy = () => {
  return (
    <div className="where-to-buy-container">
      <div className="logo-container">
        <img src={iconImage} alt="Lobbs Logo" />
      </div>
      <div className="header-container">
        <h2>Where To Buy Lobbs Juice</h2>
      </div>
      <div className="contact-info">
        <p>Please contact the Lobbs teams via information below<br /><br />
          info@lobbs.net   /   Tel: 07814483083 <br />
          
        </p>
      </div>
    </div>
  );
}

export default WhereToBuy;
