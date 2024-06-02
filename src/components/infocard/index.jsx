import React from 'react'
import "./infocard.css"
import image  from "assets/image1.svg";
const InfoCard = () => {
  return (
    <div className="info_container">
        <div className="info_inner_container">
        <div className="info_image">
            <img src={image} alt='image1' className="image"/>
             </div>
        <div className="info_description">

        </div>
        </div>
    </div>
  )
}

export default InfoCard;