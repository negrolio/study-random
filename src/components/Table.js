import React, { Component } from 'react';
import Row from './Rows';
import Button from './Button/index';
import './Table.css';
import NormalizeDataToPlay from './NormalizeDataToPlay/index';
import AnswerButtons from './AnswerButtons/index';

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
    // if the input comes from a row, the Row component will pass the event and the row id like a second parameter,
    // if come from a column, the method setColumn only will pass the event
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
          [event.target.id]: {
            title: event.target.value,
            nativeIndex: +event.target.id
          }
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
        id={i}
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

  saveValuesInAppStateAndPlay = () => {
    const newProject = NormalizeDataToPlay(this.state.values)
    this.props.setValues(newProject);
    this.props.play();
  }

  chooseTargetColumn = () => {
    console.log(this.state.values)
    const newProject = NormalizeDataToPlay(this.state.values)
    console.log(newProject.project)
    return (
      <div><AnswerButtons options={newProject.project.colums} /></div>
    )
  }

  showElectionOfTarget = () => {
    this.setState((prevState)=>({
      showElectionOfTarget: !prevState.showElectionOfTarget
    }))
  }

  render() {
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
        <Button label={'Play this project'} eventOnClick={this.showElectionOfTarget} />
        {this.state.showElectionOfTarget && this.chooseTargetColumn()}
      </div>
    )
  }
}

export default Table;