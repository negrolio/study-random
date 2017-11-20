import React from 'react';
import './style.css';

const TargetDisplay = (props) => {
    return (
        <div className='container'>
            <h1>{props.label}</h1>
        </div>
    )
}

export default TargetDisplay;