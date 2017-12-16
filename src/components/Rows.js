import React from 'react';

const Row = ({ numColumns, eventOnChange, id}) => {

  const onChange = (event) => {
    eventOnChange(event, id);
  }
  const renderRow = () => {
    const columns = []
    for (let i = 0; i < numColumns; i++) {
      columns.push(
          <td key={i} ><textarea rows="10" cols="30" id={`row${i}`} onChange={onChange} ></textarea></td>
      );
    }
    return columns; 
  }
  return (
    <tr>
      {renderRow()}
    </tr>
  )
}

export default Row;