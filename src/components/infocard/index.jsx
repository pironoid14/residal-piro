import React from 'react'
import "./infocard.css"
import Button from 'shared/button';
import { GoArrowRight } from "react-icons/go";
import circle1 from 'assets/circle1.svg'
import circle2 from 'assets/circle2.svg'
import circle3 from 'assets/circle3.svg'
import circle4 from 'assets/circle4.svg'
import Circleimage from './circle image';
const InfoCard = ({title,subtitle,body,image,imageStyle,button,infoStyle,circle,circleStyletitle,circleStylesubtitle,reverse}) => {
  return (
    <div className="info_container">
        <div className="info_inner_container">
          {reverse ? ( <>
        
        <div className="info_description">
          </div>
          <div className={imageStyle}>
            <img src={image} alt='image1' className="image"/>
             </div>
             
          </>
       ):(
      <>
    <div className={imageStyle}>
            <img src={image} alt='image1' className="image"/>
             </div>
        <div className="info_description">
            <div className={infoStyle}>
              {circle && (<div className="info_circle">
                <Circleimage image= {circle1}/>
                <Circleimage image= {circle2} style={{marginLeft:'30px'}}/>
                <Circleimage image= {circle3} style={{zIndex:30,marginLeft:'30px'}}/>
                <Circleimage image= {circle4}style={{marginLeft:'30px',zIndex:'40'}}/>            
                </div>)}
                {circleStyletitle ? (<h2 className="info-title" style={{fontWeight:600}}>{title} </h2>
              ):<h2 className="info-title">{title} </h2>}
            {circleStylesubtitle ? (<h2 className="info-subtitle" style={{fontWeight:600, textAlign:"left"}}>{subtitle}</h2>)
            :(<h2 className="info-subtitle" >{subtitle}</h2>)}
            
            <p className="info-body">{body}.{""} </p>
          { button ? (<Button 
                style={{ backgroundColor: "#dba94d",
      color:"#1f4b43",
      padding:"7px,12px",
      width:"256px"
    }} btnName={"Download our app"}
    rightIcon={<GoArrowRight size ={22} />}
    />):(
      "" 
      )}
                 </div>
                 
        </div></>)}
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