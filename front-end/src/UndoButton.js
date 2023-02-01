import React from 'react'

function UndoButton(props) {

    return (
        <input 
            type='button' 
            value="UNDO"
            onClick={props.onClick}
            className="undo-button"/>
    );
}

export default UndoButton;