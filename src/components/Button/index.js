import React from 'react';
import buttonStyle from './style.css';

const Button = ({ eventOnClick, id, label, className, style, disabled}) => {

    // const  = props;

    const onClick = () => {
        eventOnClick(id)
    }

    return (
        <button
        onClick={onClick}
        className={className ? `${className} btn`: 'btn'}
        style={style || buttonStyle}
        disabled={disabled} >
            {label}
        </button>
    )
}

export default Button;
