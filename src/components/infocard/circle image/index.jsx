import React from 'react'

const Circleimage = ({image,style}) => {
  return (
<div className="info_circle_img">
                <img src={image}style={style} alt = "infocircle"  className="circle_img"/> 
                </div>  
  )
}

export default Circleimage