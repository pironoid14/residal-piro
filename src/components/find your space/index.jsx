import React from 'react'
import "./findyourspace.css"
import Button from 'shared/button'
import frame15 from 'assets/bin1.svg'
const FindyourSpace = () => {
  return (
    <div className="fyp_container flex">
      <section className="fyp_image_section">
      <img src={frame15} alt='frame1' className=""/>
      </section>
      <section className="fyp_text_section ">
        <div>
        <p>{"Your dream home is only a few clicks away"}</p>
        </div>
        <div>
        <span>{"-Find your space now!"}</span>
        </div>
        <div className="fyp_button">
        <Button style={{
          borderRadius:"10px",
          backgroundColor:"#fff",
          color:"#1B2056",
          padding:"12px 34px",
          width:"100%"
        }} btnName={"Download app"}/>
        </div>
      </section>
    </div>
  )
}

export default FindyourSpace