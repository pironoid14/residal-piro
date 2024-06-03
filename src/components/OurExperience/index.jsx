import React from 'react';
import "./ourExperiencestyles.css";
import box1 from "assets/box1.svg";
import box2 from "assets/box2.svg";
import box3 from "assets/box3.svg";
const OurExperience = () => {
  return (
    <div className="our_exp_container">
        <div className="boxes_container flex">
            <div className="box1">
            <img src={box1} alt='frame1' className=""/>
            </div>
            <div className="box2">
            <img src={box2} alt='frame2' className=""/>
            </div>
            <div className="box3">
            <img src={box3} alt='frame3' className=""/>
            </div>
        </div>
        <div className="text flex">
            {`Our Experience guarantees unmatched proficiency and excellence.`}
        </div>
    </div>
  )
}

export default OurExperience;