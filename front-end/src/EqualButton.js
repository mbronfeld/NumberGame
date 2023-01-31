import React from 'react'

function EqualButton(props) {

    return (
        <input 
            type='button' 
            value="="
            onClick={props.onClick}
            className="equal-button"/>
    );
}

export default EqualButton;