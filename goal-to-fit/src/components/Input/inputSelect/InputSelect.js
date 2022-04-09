import React, { useState } from "react";
import './InputSelect.css'
import goalOption from './goalSelector.json'
import Input from "../Input";

const InputSelect = ({ children = "", addUserGoal, ...props }) => {

    function selectGoal(event) {
        const result = event.target.value

    }



    return (
        <span className="input-select">
            <div>
                <label className="primary-text-color"
                    htmlFor={children.toLocaleLowerCase()}
                >
                    {children}
                </label>
                <select id={children.toLocaleLowerCase()} className={"display-block"} onChange={selectGoal} required>
                    {goalOption.map((text) => {
                        return (<option key={text} value={text}> {text} </option>)
                    })
                    }
                </select>
            </div>
            <div>
            
            </div>
        </span>
    );
}

export default InputSelect;