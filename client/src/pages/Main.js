import React from 'react';
import './Main.css';
import bannerImage from '../assets/images/banner/banner.jpg';
import fruitBanner from '../assets/images/main-grid-image/fruit-banner.jpg';
import vegBanner from '../assets/images/main-grid-image/veg-banner.jpg';
import labelBanner from '../assets/images/main-grid-image/label-banner.jpg';

const Main = () => {
    return (
        <div className="main-container">
            <img src={bannerImage} alt="Banner" className="banner" />

            <h1 className="title">Lobbs make sure you know what you drink</h1>
            <h3 className="subtitle">
                We simplify the information for consumers to know what's inside the
                bottle and where it came from
            </h3>

            <div className="grid">
                <div className="card">
                    <a href="/fruits">
                        <img src={fruitBanner} alt="Card 1" className="card-image" />
                    </a>
                    <p className="pm-text">
                        Pressed fruit juice offers natural flavors, essential vitamins,
                        minerals, antioxidants, hydration, and immediate energy, without
                        artificial additives or preservatives.
                    </p>
                </div>
                <div className="card">
                    <a href="/vegetables">
                        <img src={vegBanner} alt="Card 2" className="card-image" />
                    </a>
                    <p className="pm-text">
                        Pressed vegetable juice delivers vital nutrients, antioxidants,
                        hydration, enzymes, rapid nutrient absorption, detox benefits, and a
                        fresh taste without added sugars.
                    </p>
                </div>
                <div className="card">
                    <a href="/label">
                        <img src={labelBanner} alt="Card 3" className="card-image" />
                    </a>
                    <p className="pm-text">
                        Transparent juice labeling ensures informed choices, builds trust,
                        avoids allergens, promotes health awareness, and guarantees
                        ingredient clarity for consumers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;

