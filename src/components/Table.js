import React, { Component } from 'react';
import Row from './Rows';
import './Table.css'

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numRows: 1,
      numColumns: 2,
      columns: [],
      rows: [],
      values: {rows:{}}
    };
  }

  componentDidMount () {
    this.setColumns(this.state.numColumns);
    this.setRows(this.state.numRows);
  }

  componentDidUpdate(prevProps, prevState) {
    // if the number of columns change, we need to render again the rows
    this.state.numColumns !== prevState.numColumns && this.setRows(this.state.numRows)
  }

  addRow = () => {
   this.setRows(this.state.numRows + 1);
  }
  removeARow = () => {
   this.setRows(this.state.numRows - 1);
  }

  addColumn = () => {
    this.setColumns(this.state.numColumns + 1);
  }

  removeAColumn = () => {
   this.setColumns(this.state.numColumns - 1)
  }

  setValueOfInputs = (event, rowId) => {
    event.persist()
    rowId || rowId === 0 ? 
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        rows: {
          ...prevState.values.rows,
          [rowId]: {
            ...prevState.values.rows[rowId],
            [event.target.id]: event.target.value
          }
        }
      }
    })) :
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        columns: {
          ...prevState.values.columns,
          [event.target.id]: event.target.value
        }
      }
    }))
  }

  setColumns = (quantyOfColums) => {
    const columns = [];
    for (let i = 0; i < quantyOfColums; i++) {
      columns.push(
      <th key={i}>
        <input
        type='text'
        size={30}
        id={`colum${i}`}
        onChange={this.setValueOfInputs}
        // value={this.state.values && `${this.state.values.colum}${i}`}
        />
      </th>)
    }
    this.setState({
      numColumns: quantyOfColums,
      columns: columns
    });
  }

  setRows = (quantyOfRows) => {
    const rows = [];
    for (let i = 0; i < quantyOfRows; i++) {
      rows.push(<Row key={i} id={i} numColumns={this.state.numColumns} eventOnChange={this.setValueOfInputs} />)
    }
    this.setState({
      numRows: quantyOfRows,
      rows: rows
    })
  }

  buttonsToAddAndRemove = (add, remove, conditional) => {
    return (
      <div>
        <input type="button" value="+" onClick={add} />
      {conditional &&
        <input type="button" value="-" onClick={remove} />
      }
      </div>
    )
  }

  render() {
    console.log(this.state)
    const { numColumns, numRows, columns, rows } = this.state;
    return (
      <div>
        <table className="principal-table">
          <thead>
            <tr>
              {columns}
              <th>
                {this.buttonsToAddAndRemove(this.addColumn, this.removeAColumn, numColumns > 2)}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows}
          </tbody>

          <tfoot>
            <tr>
              <td>
                {this.buttonsToAddAndRemove(this.addRow, this.removeARow, numRows > 1)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>          
    )
  }
}

export default Table;