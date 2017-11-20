import React, { Component } from 'react';
import Button from './../Button/index';

class OptionsButtons extends Component {
  
  renderButtons() {
    const { options, onClick } = this.props;
    
    const eventOnClick = (e) => {
      onClick(e);
      e.target.disabled = true;
    }

    const arrayButtons = options.map((option) => {
      return (
        <Button 
          eventOnClick={eventOnClick}
          option={option}
          key={option.nativeIndex}
          label={option.title} />
      )
    });
    return arrayButtons;
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
      </div>
    )
  }
}

export default OptionsButtons;