import React from 'react';
import "./buttonStyles.css";
const Button = ({style, btnName, outline,rightIcon,leftIcon }) => {
  return ( 
    <button style={style} className={`${ outline ? "outline" : "btn"}`}>
      {leftIcon && <span className="leftIcon">{leftIcon}</span>}
      {btnName}
    {rightIcon && <span className="rightIcon">{rightIcon}</span>}
    </button>

  )
}

export default Button;