import React, { Component } from 'react';
import './App.css';
import QuestionBuilder from './components/QuestionBuilder/index.js';
import project from './fakeDataBase/project1';
import Table from './components/Table';
import Button from './components/Button/index';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showConstructor: false,
      showPlay: false
    }

    this.showConstructor = this.showConstructor.bind(this);
    this.showPlay = this.showPlay.bind(this);
  }

  showConstructor () {
    this.setState((prevState)=>({
      showConstructor: !prevState.showConstructor
    }));
  }
  showPlay () {
    this.setState((prevState)=>({
      showPlay: !prevState.showPlay
    }))
  }
  render() {
    const { showConstructor, showPlay } = this.state;

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
            {showConstructor && <Table />   }
            {showPlay && <QuestionBuilder projects={project} />}
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default App;
