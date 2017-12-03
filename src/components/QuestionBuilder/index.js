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
    this.setCurrentTarget = this.setCurrentTarget.bind(this);
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
    this.setCurrentTarget();
  }

  // take an element from columns array and search that element like a propertie in the objects of row array
  // return an array of objects with title, the index where it come from, if have to be disabled or if was correctly selected
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

  // take the first from the targetsArray
  setCurrentTarget () {
    this.setState ({
      currentTarget: this.state.targetsArray[0]
    });
  }

  checkElection (optionId) {
    const { currentTarget, optionsArray, targetsArray } = this.state;
    const electionId = parseInt(optionId, 10);

    function returnEditedOptionsArray (selectedOptionId, correctSelection) {
      return optionsArray.map((option) => {
        const thisOptionClicked = newOption.nativeIndex === selectedOptionId
        return {
          ...option,
          disabled: thisOptionClicked ? true : newOption.disabled || correctSelection,
          selectedWell: thisOptionClicked ? correctSelection : option.selectedWell
        }
        // const newOption = {...option}
        // newOption.disabled = newOption.disabled || correctSelection;
        // if (newOption.nativeIndex === selectedOptionId) {
        //   newOption.selectedWell = correctSelection;
        //   newOption.disabled = true;
        // }
        // return newOption
      });
    }

    let newOptionsArray;
    // check if the clicked option matche with the target
    if (currentTarget.nativeIndex === electionId) {
      // avoid showing the 'next' button if only one objective remains to guess
      targetsArray.length !== 1 && this.setState({
        showNextTargetButton: true
      });
      // put all options in disabled, and the correct matche in true
      newOptionsArray = returnEditedOptionsArray(electionId, true);
    } else {
      // just put in disabled the wrong election
      newOptionsArray = returnEditedOptionsArray(electionId, false);
    }

    this.setState({
      optionsArray: newOptionsArray
    })
  }

  nextTarget () {
    const { targetsArray, optionsArray } = this.state;
    // remove first element of the targetsArray
    targetsArray.shift();
    this.setCurrentTarget();
    // reset the options properties to the next guess
    const newOptionsArray = optionsArray.map((e) => {
      e.disabled = false;
      e.selectedWell = false;
      return e;
    });
    this.setState({
      optionsArray: shuffle(newOptionsArray),
      showNextTargetButton: false
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
