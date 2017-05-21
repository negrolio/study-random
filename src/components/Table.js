import React, { Component } from 'react';
import Row from './Rows';
import './Table.css'

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numRows: 1,
      numColumns: 1,
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
      rows.push(<Row numColumns={this.state.numColumns}/>)
    }
    return (
      <div>
        <table className="principal-table">
          <tr>
            <th><input type='text' /></th>
            <th><input type='text' value='descripcion' /></th>
            <th><input type="button" value="+"/></th>
          </tr>
          {rows}
            <input type="button" value="+" onClick={this.addRow}/>
        </table>
      </div>          
    )
  }
}

export default Table;