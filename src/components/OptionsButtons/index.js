import React, { Component } from 'react';
import Button from './../Button/index';
import './style.css'

class OptionsButtons extends Component {
  
  renderButtons() {
    const { options, onClick, className } = this.props;
    
    const eventOnClick = (e) => {
      onClick(e);
    }

    const arrayButtons = options.map((option) => {
      const { nativeIndex, title, disabled, selectedWell } = option;

      return (
        <Button 
          eventOnClick={eventOnClick}
          id={option.nativeIndex}
          key={option.nativeIndex}
          label={option.title} 
          className={selectedWell && 'btn-well'}
          disabled={option.disabled} />
      )
    });
    return arrayButtons;
  }

  render() {
    return (
      <div className={'container-answers'}>
        {this.renderButtons()}
      </div>
    )
  }
}

export default OptionsButtons;