import React from 'react'
import "./discover.css"
import Button from 'shared/button';
import { GoArrowRight } from "react-icons/go";
const Discover = () => {
  return (
    <div className="disc-container">
      <div className="disc_content">
        <h1 className="disc_text">Discover a place you'll<br/>
love to live</h1>
<div className="button" >
        <Button style={{
            backgroundColor: "#dba94d",
            color: "#1f4b43",
            padding: "7px 12px",
            width: "256px",
          }}
          btnName={"Download our app"}
          rightIcon={<GoArrowRight size={22} />}
        />  
        </div>
      </div>
    </div>
  );
};



export default Discover