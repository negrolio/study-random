import React, { Component } from 'react';

class OptionsButtons extends Component {
  

  renderButtons() {
    const { options, onClick } = this.props;
    
    const eventOnClick = (e) => {
      onClick(e);
      e.target.disabled = true;
    }

    const arrayButtons = options.map((option) => {
      return (
        <button onClick={eventOnClick} id={option.nativeIndex} key={option.nativeIndex}>
          {option.title}
        </button>
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