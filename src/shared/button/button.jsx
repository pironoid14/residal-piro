import React from 'react'
import "./buttonStyles.css"
const Button = ({btnName, outline}) => {
  return (
    <div className={`${ outline ? outline : "btn"}`}>{btnName}</div>
  )
}

export default Button