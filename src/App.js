import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionBuilder from './components/QuestionBuilder/index.js';

class App extends Component {
  render() {

    const project = {
      name:"project1",
      colums: ["title", "description", "otherThings"],
      rows: [
        {title:"tricoma", description: "una cosa rara que hace cosas raras", otherThings: "suele ser raros" },
        {title:"clasismo", description: "a veces vuela mucho", otherThings: "nada raro" },
        {title:"estela", description: "persona loca", otherThings: "hace peinados nuevos" },
        {title:"computadoris", description: "numeros de numeros", otherThings: "tu culo" },
        {title:"kilometraje", description: "hay ay aya", otherThings: "sale el viaje" }        
      ]
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{project.name}</h2>
        </div>
        {/*<Table />    */}
        <QuestionBuilder projects={project} />
      </div>
    );
  }
}

export default App;
