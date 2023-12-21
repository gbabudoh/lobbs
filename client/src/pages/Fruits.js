import React from 'react';
import './Fruits.css'; // Ensure the CSS file is imported
import fruitImage from '../assets/images/main-grid-image/fruit-banner.jpg'

const Fruits = () => {
  return (
      <div>
          <div className="fruits-container">
              <div className="fruits-grid-column left-column">
                  <h1 style={{ fontSize: '120px', color: '#0a7848' }}>Fruits</h1>
              </div>
              <div className="fruits-grid-column">
                  <img src={fruitImage} alt="Fruits" />
              </div>
          </div>
          <div className="single-column">
              <p>Fruits are vital for health and maintenance of your body. They are rich sources of essential vitamins, minerals, and fiber, which contribute to overall health. Vitamins, such as Vitamin C and A, boost immune function and skin health. Minerals like potassium in bananas aid in maintaining heart health. The fiber in fruits aids digestion, helps control blood sugar levels, and reduces the risk of chronic diseases like heart disease and type 2 diabetes. Additionally, fruits are low in calories and fat, making them an excellent choice for a healthy diet. Their natural sweetness also provides a healthier alternative to processed sugary snacks.</p>
          </div>
      </div>
  );
};

export default Fruits;