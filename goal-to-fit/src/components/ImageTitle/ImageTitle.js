import React from "react";
import './ImageTitle.css'

const ImageTitle = ( { children, imgSrc }) => {
    return (
                <div className="head-logo">
                    <img className="icon-logo" src={imgSrc}/>                       
                    <h1 className="secondary-text-color">{children}</h1>
                </div>
    );
}

export default ImageTitle;