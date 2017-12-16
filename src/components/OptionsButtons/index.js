import React, { Component } from 'react';
import Button from './../Button/index';
import './style.css'

class OptionsButtons extends Component {

  renderButtons() {
    const { options, onClick, className } = this.props;

    const arrayButtons = options.map((option) => {
      const { nativeIndex, title, disabled, selectedWell } = option;

      return (
        <Button
          eventOnClick={onClick}
          id={nativeIndex}
          key={nativeIndex}
          label={title}
          className={selectedWell && 'btn-well'}
          disabled={disabled} />
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
