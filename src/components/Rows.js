import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
    <div>
      <tr>
        <td><input placeholder="insert 1"/></td>
        <td><textarea></textarea></td>
      </tr>
    </div>
    )
  }
}

export default Row;