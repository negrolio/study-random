import React from 'react';
import Button from './../Button/index';

const NextTargetButton = (props) => {
    return (
      <div>
        <Button label={'next'} eventOnClick={props.onClick} /> 
      </div>
    )
  }

export default NextTargetButton;