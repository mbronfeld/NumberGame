import React from "react";
import OpButton from "./OpButton";

function OpButtonArray({operations, onButtonClick}) {
    
    const op_buttons = operations.map((value, index) => {
        return <OpButton
                caption={value.text}
                onClick={() => onButtonClick(value.id)}/>
    });
    
    return (
        <div className="operation-button-array">
            {op_buttons}
        </div>
    );
}

export default OpButtonArray;