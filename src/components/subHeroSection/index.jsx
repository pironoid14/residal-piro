import React from 'react'
import './subherosectionstyle.css';
import Button from 'shared/button';
import { GoArrowRight } from "react-icons/go";
const Subsectionhero = () => {
  return (
    <section className="sub_hero_section_container">
    <div className="sub_hero_text">
      <h1>Resida nullifies the hassles of agents </h1>
      <p>
        Save properties, create alerts and keep track of the enquiries you
        send to agents.
      </p>
    </div>
    <div className="sub_hero_cta">
    <Button style={{
      backgroundColor: "#dba94d",
      color:"#1f4b43",
      padding:"7px,12px",
      width:"256px"
    }} btnName={"Download our app"}
    rightIcon={<GoArrowRight size ={22}/>}
    />
      
    </div>
  </section>
  )
}

export default Subsectionhero