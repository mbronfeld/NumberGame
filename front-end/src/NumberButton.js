import React from 'react'

function NumberButton(props) {

    return (
        <input 
            type='button' 
            value={props.caption}
            onClick={props.onClick}
            className={`button-5 ${props.className}`}/>
    );
}

export default NumberButton;