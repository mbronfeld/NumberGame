import React from 'react'

function OpButton(props) {

    return (
        <input 
            type='button' 
            value={props.caption}
            onClick={props.onClick}
            className={`button-36 ${props.className}`}/>
    );
}

export default OpButton;