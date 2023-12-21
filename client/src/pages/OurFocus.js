import React, { useState } from 'react';
import './OurFocus.css';

const OurFocus = () => {
    const [flipState, setFlipState] = useState([false, false, false]);

    const handleFlip = (index) => {
        const newState = [...flipState];
        newState[index] = !newState[index];
        setFlipState(newState);
    }

    const cards = [
        { title: 'Benefits of FRUITS', message: 'Nutrients, fiber, antioxidants, vitamins, minerals, hydration, energy, digestion, weight management.' },
        { title: 'Benefits of Vegetable', message: 'Fiber, vitamins, minerals, antioxidants, low calorie, digestion, heart health, immunity, hydration.' },
        { title: 'Fruit and Veg Juices', message: 'Nutrients, vitamins, antioxidants, hydration, convenient, natural sugars, digestive health, energy.' }
    ];

    const frontColors = ['darkorange', 'darkgrey', 'darkgreen']; // The original front side colors
    const backColors = ['darkgreen', '#326da1', '#fa7b3c', '#636362', '#13805a']; // The colors you provided for the back

    return (
        <div className="ourfocus-container">
            {cards.map((card, index) => (
                <div 
                    key={index}
                    className={`card ${flipState[index] ? 'flipped' : ''}`}
                    style={{ backgroundColor: flipState[index] ? backColors[index] : frontColors[index] }} 
                    onClick={() => handleFlip(index)}
                >
                    <div className="card-front">
                        <h1>{card.title}</h1>
                    </div>
                    <div className="card-back">
                        <p>{card.message}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OurFocus;
