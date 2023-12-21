import React from 'react';
import './Label.css'; // Ensure the CSS file is imported for labels
import labelImage from '../assets/images/main-grid-image/label-banner.jpg'

const Label = () => {
  return (
      <div>
          <div className="labels-container">
              <div className="label-grid-column left-column">
                  <h1 style={{ fontSize: '120px', color: '#0a7848' }}>Labels</h1>
              </div>
              <div className="label-grid-column">
                  <img src={labelImage} alt="Labels" />
              </div>
          </div>
          <div className="single-column">
              <p>Transparent juice labeling is crucial for informed consumer choices, ensuring individuals know exactly what they're consuming. This clarity is essential for health reasons, as it allows consumers to avoid ingredients they may be allergic to or intolerant of, like certain sugars or preservatives. It also enables them to monitor their intake of nutrients, sugars, and calories, aiding in the management of health conditions like diabetes, obesity, and heart disease. Additionally, clear labeling empowers consumers to make choices aligned with their dietary preferences and needs, whether for health, ethical, or environmental reasons. This transparency fosters trust between consumers and brands, promoting responsible consumption and healthier lifestyles.</p>
          </div>
      </div>
  );
};

export default Label;