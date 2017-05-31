import React, { Component } from 'react';
import shuffle from 'shuffle-array';

class LogicRandom extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      columnToGuess: this.props.projects.colums[0],
      columnToOptions: this.props.projects.colums[1],
      targetsArray: [],
      optionsArray: [],
      optionsButtons: [],
      targetToShow:""
    }

    this.setTargetsArray = this.setTargetsArray.bind(this);
    this.setTargetToShow = this.setTargetToShow.bind(this);
    this.setOptionsArray = this.setOptionsArray.bind(this);
    this.setOptionsButtons = this.setOptionsButtons.bind(this);
    this.takeAColumnOfRow = this.takeAColumnOfRow.bind(this);
    this.checkElection = this.checkElection.bind(this);
  }


  componentWillMount () {
    this.setTargetsArray();
    this.setOptionsArray();
  }

  componentDidMount () {
    shuffle(this.state.targetsArray);
    shuffle(this.state.optionsArray);
    this.setTargetToShow();
    this.setOptionsButtons(this.state.optionsArray);
  }

  // take an element from column array and search that element like properties of the objects in row array
  takeAColumnOfRow (row, column) {
    return row.map((element, nativeIndex)=>{
      return {title: element[column], nativeIndex}
    });
  }

  setTargetsArray () {
    const newTargetsArray = this.takeAColumnOfRow(this.props.projects.rows, this.state.columnToGuess);
      console.log(newTargetsArray);
    this.setState ({
      targetsArray: newTargetsArray
    }) 
  }

  setOptionsArray () {
    const options = this.takeAColumnOfRow(this.props.projects.rows, this.state.columnToOptions)
    this.setState ({
      optionsArray: options
    })
  }

  setTargetToShow () {
    this.setState ({
      targetToShow: this.state.targetsArray[0]
    })
  }

  setOptionsButtons (options) {
    let newOptions = options.map((option) => {
      return <button 
              key={option.nativeIndex}
              onClick={()=>{this.checkElection(this.state.targetToShow,option)}}>
                {option.title}
             </button>
    });
    this.setState ({
      optionsButtons: newOptions
    })
  }

  checkElection (currentTarget, election) {
    if (currentTarget.nativeIndex === election.nativeIndex) {
      console.log('si, es el indicado')
    } else {
      console.log('no che, no es ese')
    }
  }
  
  render () {
    return (
      <div>
        <h1>{this.state.targetToShow.title}</h1>
        <div>{this.state.optionsButtons}</div>
      </div>
    )
  }
}

export default LogicRandom;