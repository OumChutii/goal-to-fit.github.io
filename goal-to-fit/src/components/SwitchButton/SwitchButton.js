import React from "react";
import "./SwitchButton.css"

const SwitchButton = ({ children = "Please Add Title",textLeft ="textLeft" ,textRight="textRight", textSwitch }) => {
    return (
        <>
            <label htmlFor={children}>{children}</label>
            <section>
                <label htmlFor="toggle-1" className="toggle-1">
                    <input type="checkbox" name="toggle-1" id="toggle-1" className="toggle-1__input"
                         />
                    <span className={` toggle-1__button ${textSwitch}`}>
                        <p>{textLeft}</p>
                        <p>{textRight}</p>
                    </span>
                </label>
            </section>
        </>
    );
}
export default SwitchButton;