import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import OptionsButtons from './../OptionsButtons/index';
import TargetDisplay from './../TargetDisplay/index';
import NextTargetButton from './../NextTargetButton/index';

class QuestionBuilder extends Component {

  constructor (props) {
    super(props);
    this.state = {
      columnToGuess: this.props.projects.colums[0],
      columnToOptions: this.props.projects.colums[1],
      targetsArray: [],
      optionsArray: [],
      currentTarget: {},
      showNextTargetButton: false
    }

    this.setTargetsArray  = this.setTargetsArray.bind(this);
    this.setOptionsArray  = this.setOptionsArray.bind(this);
    this.takeAColumnOfRow = this.takeAColumnOfRow.bind(this);
    this.checkElection    = this.checkElection.bind(this);
    this.nextTarget       = this.nextTarget.bind(this);
  }


  componentWillMount () {
    this.setTargetsArray();
    this.setOptionsArray();
  }

  componentDidMount () {
    shuffle(this.state.targetsArray);
    shuffle(this.state.optionsArray);
    // set the first element of targetsArray like the current target
    this.setState ({
      currentTarget: this.state.targetsArray[0]
    });
  }

  // take an element from columns array and search that element like a propertie in the objects of row array
  // return an array of objects with title, the index where it come from, if have to be disabled and if was correctly selected
  takeAColumnOfRow (row, column) {
    return row.map((element, nativeIndex)=>{
      return {title: element[column],
              nativeIndex,
              disabled: false,
              selectedWell: false}
    });
  }

  // select from the column array, what are going to be the targets
  setTargetsArray () {
    const newTargetsArray = this.takeAColumnOfRow(this.props.projects.rows, this.state.columnToGuess);
    this.setState ({
      targetsArray: newTargetsArray
    })
  }

  // select from the column array, what are going to be the options
  setOptionsArray () {
    const options = this.takeAColumnOfRow(this.props.projects.rows, this.state.columnToOptions)
    this.setState ({
      optionsArray: options
    })
  }

  checkElection (optionId) {
    const { currentTarget, targetsArray } = this.state;

    
    let newOptionsArray;
    // check if the clicked option matche with the target
    if (currentTarget.nativeIndex === optionId) {
      // avoid showing the 'next' button if only one objective remains to guess
      targetsArray.length !== 1 && this.setState({
        showNextTargetButton: true
      });
      // put all options in disabled, and the correct matche in true
      newOptionsArray = this.returnEditedOptionsArray(optionId, true);
    } else {
      // just put in disabled the wrong election
      newOptionsArray = this.returnEditedOptionsArray(optionId, false);
    }
    
    this.setState({
      optionsArray: newOptionsArray
    })
  }
  
  returnEditedOptionsArray = (selectedOptionId, correctSelection) => {
    return this.state.optionsArray.map((option) => {
      const thisOptionClicked = option.nativeIndex === selectedOptionId
      return {
        ...option,
        disabled: thisOptionClicked ? true : option.disabled || correctSelection,// this is for put all the options in disabled when click the correct
        selectedWell: thisOptionClicked ? correctSelection : option.selectedWell
      }
    });
  }
  
  nextTarget () {
    const { targetsArray, optionsArray } = this.state;
    const newTargetsArray = targetsArray.slice(0);
    // remove first element of the array
    newTargetsArray.shift();
    // reset the options properties to the next guess
    const newOptionsArray = optionsArray.map((option) => {
      return {
        ...option,
        disabled: false,
        selectedWell: false
      };
    });
    this.setState({
      optionsArray: shuffle(newOptionsArray),
      targetsArray: newTargetsArray,
      showNextTargetButton: false,
      currentTarget: newTargetsArray[0]
    });
  }

  render () {
    const { currentTarget, optionsArray, showNextTargetButton } = this.state
    return (
      <div>
        <TargetDisplay label={currentTarget.title} />
        <OptionsButtons onClick={this.checkElection} options={optionsArray} />
        {showNextTargetButton && <NextTargetButton onClick={this.nextTarget} />}
      </div>
    )
  }
}

export default QuestionBuilder;
