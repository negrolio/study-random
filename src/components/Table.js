import React, { Component } from 'react';
import Row from './Rows';
import './Table.css'

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numRows: 1,
      numColumns: 2,
    };

    this.addRow = this.addRow.bind(this);
    this.removeARow = this.removeARow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.removeAColumn = this.removeAColumn.bind(this);
    this.renderColumns = this.renderColumns.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  addRow () {
   this.setState({
     numRows: this.state.numRows + 1
   })
  }
  removeARow () {
    this.setState({
      numRows: this.state.numRows - 1
    })
  }

  addColumn () {
    this.setState({
      numColumns: this.state.numColumns + 1
    })
  }
  removeAColumn () {
    this.setState({
      numColumns: this.state.numColumns - 1
    })
  }

  renderColumns () {
    const columns = [];
    for (let i = 0; i < this.state.numColumns; i++) {
      columns.push(<th key={i}><input type='text' size={30} /></th>)
    }
    return columns;
  }

  renderRows () {
    const rows = [];
    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(<Row key={i} numColumns={this.state.numColumns}/>)
    }
    return rows;
  }

  render() {
    const { numColumns, numRows } = this.state;
    return (
      <div>
        <table className="principal-table">
          <thead>
            <tr>
              {this.renderColumns()}
              <th>
                <input type="button" value="+" onClick={this.addColumn} />
                {numColumns > 2 &&
                  <input type="button" value="-" onClick={this.removeAColumn} />
                }
              </th>
            </tr>
          </thead>

          <tbody>
            {this.renderRows()}
          </tbody>

          <tfoot>
            <tr>
              <td>
                {numRows > 1 &&
                  <input type="button" value="-" onClick={this.removeARow}/>  
                }
                <input type="button" value="+" onClick={this.addRow}/>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>          
    )
  }
}

export default Table;