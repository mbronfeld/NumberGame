import React from "react";
import GameButton from "./GameButton";

function OpButtonArray({operations, onButtonClick}) {
    
    const op_buttons = operations.map((value, index) => {
        return <GameButton
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