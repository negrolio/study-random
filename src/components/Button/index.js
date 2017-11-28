import React from 'react';
import buttonStyle from './style.css';

const Button = (props) => {

    const { eventOnClick, id, label, className, style, disabled} = props;
    return (
        <button 
        onClick={eventOnClick} 
        id={id}
        className={className ? `${className} btn`: 'btn'}
        style={style || buttonStyle} 
        disabled={disabled} >
            {label}
        </button>
    )
}

export default Button;