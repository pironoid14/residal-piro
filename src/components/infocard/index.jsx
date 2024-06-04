import React from 'react'
import "./infocard.css"
import Button from 'shared/button';
const InfoCard = ({title,subtitle,body,image,imageStyle}) => {
  return (
    <div className="info_container">
        <div className="info_inner_container">
        <div className={imageStyle}>
            <img src={image} alt='image1' className="image"/>
             </div>
        <div className="info_description">
            <div className="info">
            <h2 className="info-title">{title} </h2>
            <h2 className="info-subtitle">{subtitle}</h2>
            <p className="info-body">{body}.{""} </p>
                 </div>
                 <div className="buTton">
                <Button 
                style={{ backgroundColor: "#dba94d",
      color:"#1f4b43",
      padding:"7px,12px",
      width:"256px"
    }} btnName={"Download our app"}/> 
                </div>
        </div>
        </div>
    </div>
     //<div className="info_container">
   //  <div className="info_inner_container">
    // <div className="info_image">
      //   <img src={image} alt='image1' className="image"/>
        //  </div>
     //<div className="info_description">
       //  <div className="info">
        // <h2 className="info-title">Resida is not just an app </h2>
         //<h2 className="info-subtitle">we are an ecosystem with you at the center</h2>
         //<p className="info-body">Resida aims to bridge the gap between potential tenants and 
           //     available properties. This app is not just a tool; it's a solution for 
             //   individuals and families who are navigating the challenging terrain 
               //of apartment hunting in a new or familiar city.{""} </p>
              //</div>
     //</div>
     //</div>
 //</div>
  )
}

export default InfoCard;