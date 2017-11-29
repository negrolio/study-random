import React from 'react';

const Row = (props) => {

  const renderRow = () => {
    const columns = []
    for (let i = 0; i < props.numColumns; i++) {
      columns.push(
          <td key={i} ><textarea rows="10" cols="30"></textarea></td>
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