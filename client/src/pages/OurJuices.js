import React from 'react';
import './OurJuices.css';
import juiceImage1 from '../assets/images/bottles/allsweet-watermelon-juice.png'
import juiceImage2 from '../assets/images/bottles/navel-orange-juice.png'
import juiceImage3 from '../assets/images/bottles/pink-lady-apple-juice.png'



function OurJuices() {
    return (
        <div className="our-juices-container">
            
            <div className="banner-our-juices">
                <h1>OUR JUICES</h1>
            </div>
            
            <div className="grid">
                
                {/* Column 1 */}
                <div className="column">
                    <div className="image-container">
                        <img src={juiceImage3} alt="Juice 1" className="juice-image"/>
                    </div>
                    <div className="title-container">
                        <h2>Pressed Pink Lady Apple Juice</h2>
                    </div>
                    <div className="description-container">
                        <p>Derived from organic Pink Lady Apple</p>
                    </div>
                </div>
                {/* Column 2 */}
                <div className="column">
                    <div className="image-container">
                        <img src={juiceImage2} alt="Juice 1" className="juice-image"/>
                    </div>
                    <div className="title-container">
                        <h2>Pressed Navel Orange Juice </h2>
                    </div>
                    <div className="description-container">
                        <p>Derived from organic Navel Orange</p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="column">
                    <div className="image-container">
                        <img src={juiceImage1} alt="Juice 2" className="juice-image"/>
                    </div>
                    <div className="title-container">
                        <h2>Pressed Allsweet Watermelon Juice</h2>
                    </div>
                    <div className="description-container">
                        <p>Derived from organic Allsweet Watermelon</p>
                    </div>
                </div>
                

                {/* ... similarly add more columns as needed ... */}
            </div>
        </div>
    );
}

export default OurJuices;
