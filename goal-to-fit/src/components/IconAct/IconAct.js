import React from 'react';
import './IconAct.css';

function IconAct({ iconResults }) {


  return (
    <div div className="block-icon" >
      <button className="button-icon" >
        <img src={iconResults.src} className="icon" />
      </button>
      <span>{iconResults.name}</span>
    </div>

  );
}

export default IconAct;
