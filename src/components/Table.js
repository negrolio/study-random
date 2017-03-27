import React, { Component } from 'react';
import Row from './Rows';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:''
    }
  }

  addRow () {
    alert('hola estoy andando');
  }


  render() {
    return (
      <div>
        <div className="row">
          <Row />
          <input type="button" value="+" onClick={this.addRow}/>
        </div>
        <div className="column">
          <textarea></textarea>
          <input type="button" value="+"/>
        </div>
      </div>          
    )
  }
}

export default Table;