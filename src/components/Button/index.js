import React from 'react';
import buttonStyle from './style.css';

const Button = (props) => {

    const { eventOnClick, option, label} = props;

    return (
        <button 
        onClick={eventOnClick} 
        id={option.nativeIndex}
        className={props.className || 'btn'}
        style={props.style || buttonStyle} 
        disabled={props.disabled} >
            {label}
        </button>
    )
}

export default Button;