// src/OurStory.js
import React from 'react';
import './OurStory.css';
import ourStoryImage from '../assets/images/other-images/our-story.jpg'

function OurStory() {
  return (
    <div className="ourStoryContainer">
      <div className="leftColumn">
      <img src={ourStoryImage} alt="Our Story" className="backgroundImage" />
        <div className="overlayText"></div>
      </div>
      <div className="rightColumn">
        <div className="vBanner"></div>
        <h1 className="title">IDEA BEHIND LOBBS</h1>
        <p className="description">Lobbs was birthed from witnessing rampant food waste and misleading labeling in the beverage industry. Recognising a pressing need for transparency and sustainability, Lobbs committed to using organic fruits and vegetables. They transform these into nourishing pressed juices, ensuring consumers know their exact origins, championing genuine health and environmental benefits.<br/><br/>

<b>Lobbs is aware of the concerns around fruit juices and the inconsistent dietary guidelines that deal with 100% fruit juice (FJ) because it represents a source of free sugars</b><br/><br/>

<b>The company is committed to producing healthy juices that are not only delicious but also good for the body. While juicing has its pros and cons, Lobbs is committed to providing consumers with fresh fruits and vegetables in their diet</b><br/><br/>

<b>By promoting healthy living and transparency, Lobbs is committed to making a positive impact on the world.</b>
</p>
      </div>
    </div>
  );
}

export default OurStory;
