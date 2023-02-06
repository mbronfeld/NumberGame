import React from "react";
import NumberButton from "./NumberButton";
import OpButton from "./OpButton";

function ChosenButtonArray({numberButtons, operatorButton, 
                            onNumberButtonClick, onOperatorButtonClick, evaluate}) {
    
    const leftChosenNumber = numberButtons[0] ? <NumberButton
                                        caption={numberButtons[0].text}
                                        onClick={() => onNumberButtonClick(numberButtons[0].id)}
                                        /> : null;
    
    const rightChosenNumber = numberButtons[1] ? <NumberButton
                                        caption={numberButtons[1].text}
                                        onClick={() => onNumberButtonClick(numberButtons[1].id)}
                                        /> : null;

    const opChosen = operatorButton[0] ? <OpButton
                                        caption={operatorButton[0].text}
                                        onClick={() => onOperatorButtonClick(operatorButton[0].id)}
                                        className="top-op-button-special-height"
                                        /> : null;

    return (
        <div className="chosen-button-array-container">
            <div className="left-chosen-button">
                {leftChosenNumber}
            </div>
            <div className="op-chosen-button">
                {opChosen}
            </div>
            <div className="right-chosen-button">
                {rightChosenNumber}
            </div>
        </div>
    );
}

export default ChosenButtonArray;