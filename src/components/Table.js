import React, { Component } from 'react';
import Row from './Rows';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numRows: 0
    };
    this.addRow = this.addRow.bind(this);
  }

  addRow () {
   this.setState({
     numRows: this.state.numRows + 1
   })
  }


  render() {
    const rows = [];
    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(<Row />)
    }
    return (
      <div>
        <table>
          <tr>
            <td><input type='text' value='titulo' /></td>
            <td><input type='text' value='descripcion' /></td>
          </tr>
          <tr>
            <td><Row /></td>
          </tr>
          {rows}
          <input type="button" value="+" onClick={this.addRow}/>
        </table>
          <input type="button" value="+"/>
      </div>          
    )
  }
}

export default Table;