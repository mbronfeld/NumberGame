import React from "react";
import GameButton from "./GameButton";

function ChosenButtonArray({numberButtons, operatorButton, 
                            onNumberButtonClick, onOperatorButtonClick}) {
    
    const leftChosenNumber = numberButtons[0] ? <GameButton
                                        caption={numberButtons[0].text}
                                        onClick={() => onNumberButtonClick(numberButtons[0].id)}
                                        /> : null;
    
    const rightChosenNumber = numberButtons[1] ? <GameButton
                                        caption={numberButtons[1].text}
                                        onClick={() => onNumberButtonClick(numberButtons[1].id)}
                                        /> : null;

    const opChosen = operatorButton[0] ? <GameButton
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