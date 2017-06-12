import React, { Component } from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick} id={props.id}>
      {props.value}
    </button>
  );
}

class OptionsButtons extends Component {
  
  renderButtons() {
    const { options, onClick } = this.props;
    
    const arrayButtons = options.map((option) => {
      return <Button
              onClick={onClick}
              value={option.title}
              id={option.nativeIndex}
              key={option.nativeIndex}/>
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