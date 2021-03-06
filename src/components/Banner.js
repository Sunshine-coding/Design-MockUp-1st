import React from "react";
import './banner.css'; 


function Banner(props) {
  console.log(props.children);
 
  return (
    <div className="speech-bubble">
      <p className="speech-bubble-text">
        {props.introText}  
        <span>{props.highlight}</span> 
        {props.endText}
      </p>
      {props.children}
    </div>
  );
}

export default Banner;
