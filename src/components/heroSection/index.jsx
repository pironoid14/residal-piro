import React from 'react'
import './heroSectionStyle.css';
import Button from 'shared/button';
import image from 'assets/image.jpg'
const HeroSection = () => {
  return (
    <div className="hero_section_container">
      style={{
        backgroundImage: <url>{image}</url>
      }}
        <div className="herosectioncontent">
            <p>Finding the perfect home has never been this easy</p>
            <span>Eliminate stressful house searches. We link you with the Lagos’s finest and most affordable residences - <strong>Zero agent fees, middle men payments & hassles.</strong></span>
   <div className="btn_container">
   <Button btnName={"Download our app"}/>

    <Button style
    btn btnName={"Learn more"}/>
   </div>
        </div>
    </div>
  )
}

export default HeroSection