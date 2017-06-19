import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import OptionsButtons from './OptionsButtons/index.js';

class LogicRandom extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      columnToGuess: this.props.projects.colums[0],
      columnToOptions: this.props.projects.colums[1],
      targetsArray: [],
      optionsArray: [],
      currentTarget: {}
    }

    this.setTargetsArray  = this.setTargetsArray.bind(this);
    this.setCurrentTarget  = this.setCurrentTarget.bind(this);
    this.setOptionsArray  = this.setOptionsArray.bind(this);
    this.takeAColumnOfRow = this.takeAColumnOfRow.bind(this);
    this.checkElection    = this.checkElection.bind(this);
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
  // return an array of objects with title, and the index where it come from
  takeAColumnOfRow (row, column) {
    return row.map((element, nativeIndex)=>{
      return {title: element[column], nativeIndex}
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
    })
  }

  checkElection (election) {
    if (this.state.currentTarget.nativeIndex === parseInt(election.target.id, 10)) {
      console.log('si, es el indicado')
    } else {
      console.log('no che, no es ese')
    }
  }
  
  render () {
    return (
      <div>
        <h1>{this.state.currentTarget.title}</h1>
        <OptionsButtons onClick={this.checkElection} options={this.state.optionsArray} />
      </div>
    )
  }
}

export default LogicRandom;