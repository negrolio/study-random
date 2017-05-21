import React from 'react';

const Row = (props) => {
  const columns = []
  for (let i = 0; i < props.numColumns; i++) {
    columns.push(
      <div>
        
      </div>
    )
  }
  return (
    <tr>
      {columns}
    </tr>
  )
}

export default Row;