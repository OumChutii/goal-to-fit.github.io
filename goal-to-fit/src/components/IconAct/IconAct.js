import React from 'react';
import './IconAct.css';

function IconAct({ src,alt,iconName }) {


  return (
    <div  className="block-icon" >
      <button className="button-icon" >
        <img src={src} alt={alt} className="icon" />
      </button>
      <div className="secondary-icon-color middle-font">{iconName}</div>
    </div>

  );
}

export default IconAct;
