import React from 'react'
import GameButton from './GameButton';

function ButtonArray({buttons, onButtonClick}) {

    const game_buttons = buttons.map((value, index) => {
        return <GameButton 
                caption={value.text} 
                onClick={() => onButtonClick(value.id)}/>
    });

    return (
        <div className="button-array-container">
            {game_buttons}
        </div>
    );
}

export default ButtonArray;