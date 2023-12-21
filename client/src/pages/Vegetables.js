import React from 'react';
import './Vegetables.css'; // Ensure the CSS file is imported for vegetables
import vegetableImage from '../assets/images/main-grid-image/veg-banner.jpg'

const Vegetables = () => {
  return (
      <div>
          <div className="vegetables-container">
              <div className="vegetable-grid-column left-column">
                  <h1 style={{ fontSize: '120px', color: '#0a7848' }}>Veg</h1>
              </div>
              <div className="vegetable-grid-column">
                  <img src={vegetableImage} alt="Vegetables" />
              </div>
          </div>
          <div className="single-column">
              <p>Vegetables are essential for good health due to their high nutrient content. Rich in vitamins, minerals, and dietary fiber, they play a vital role in maintaining and improving bodily functions. Vitamins like A, C, and K, found in leafy greens and cruciferous vegetables, support vision, immune function, and blood clotting, respectively. Minerals such as iron and potassium aid in oxygen transportation and blood pressure regulation. The dietary fiber in vegetables improves digestive health, aids in maintaining a healthy weight, and lowers the risk of chronic diseases like heart disease and type 2 diabetes. Regular consumption of a variety of vegetables ensures balanced nutrition and overall well-being.</p>
          </div>
      </div>
  );
};

export default Vegetables;
