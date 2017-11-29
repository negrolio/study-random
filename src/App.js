import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionBuilder from './components/QuestionBuilder/index.js';
import project from './fakeDataBase/project1';
import Table from './components/Table';

class App extends Component {
  render() {

    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{project.name}</h2>
        </div> */}
        {<Table />   }
        {/* <QuestionBuilder projects={project} /> */}
      </div>
    );
  }
}

export default App;
