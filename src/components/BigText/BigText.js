import React from "react";
import "./BigText.css"

const BigText = ({...props}) =>{
    return(
        <div  className="wrapperBig-text">
            <div className="big-text">
                <h3 className="text">{props.text}</h3>
            </div>
        </div>    
    )
}

export default BigText;