import React from 'react';
import shuffle from 'shuffle-array';

const LogicRandom = (props) => {
  
  const targetsArray = props.projects.rows.map((element, nativeIndex)=>{
    return {title: element.title, nativeIndex}
  });
  const optionsArray = props.projects.rows.map((element, nativeIndex)=>{
      return {title: element.description, nativeIndex}
  });

  shuffle(targetsArray);
  shuffle(optionsArray);

  let target = targetsArray[0];

  let buttons = [];
  
  const descriptionButtons = (description) => {
    description.forEach(function(element) {
      buttons.push(
        <button onClick={()=>{checkElection(target,element)}}
        >{element.title}</button>
      )
    })
  }

  function checkElection (currentTarget, election) {
    if (currentTarget.nativeIndex === election.nativeIndex) {
      console.log('si, es el indicado')
    } else {
      console.log('no che, no es ese')
    }
  }
  
  descriptionButtons(optionsArray);
  
  return (
    <div>
      <h1>{target.title}</h1>
      <div>{buttons}</div>
    </div>
  )
}

export default LogicRandom;