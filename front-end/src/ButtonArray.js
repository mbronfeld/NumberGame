import React from 'react'
import NumberButton from './NumberButton';

function ButtonArray({buttons, onButtonClick}) {

    const game_buttons = buttons.filter((button) => button.visible).map((button) => {
            return <NumberButton
                    caption={button.text}
                    onClick={() => onButtonClick(button.id)}
                    className="button-5"/>
    });

    return (
        <div className="button-array-container">
            {game_buttons}
        </div>
    );
}

export default ButtonArray;