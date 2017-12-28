import React, { Component } from 'react';
import './App.css';
import QuestionBuilder from './components/QuestionBuilder/index.js';
import project from './fakeDataBase/project1';
import Table from './components/Table';
import Button from './components/Button/index';
import ConstructorProjectHOC from './components/ConstructorProjectHOC/index';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showConstructor: false,
      showPlay: false,
      tableValues: {}
    }
  }

  setTableValues = (values) => {
    this.setState({
      tableValues: values
    })
  }
  showConstructor = () => {
    this.setState((prevState)=>({
      showConstructor: !prevState.showConstructor
    }));
  }
  showPlay = () => {
    this.setState((prevState)=>({
      showPlay: !prevState.showPlay
    }))
  }
  render() {
    const { showConstructor, showPlay, tableValues } = this.state;
    const Play = ConstructorProjectHOC(QuestionBuilder, tableValues)
    return (
      <div className="App">
        <div className="wrapper">
          <div className="header">
            <h1>{ project.name }</h1>
          </div>
          <div className="sidebar">
            {!showConstructor && <Button label={'New Project'} eventOnClick={this.showConstructor} />}
            {!showPlay && <Button label={'Play'} eventOnClick={this.showPlay} />}
          </div>
          <div className="content">
            {showConstructor && <Table setValues={this.setTableValues} />}
            {showPlay && <Play />}
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default App;
