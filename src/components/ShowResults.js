import React from 'react';

function Finished(props) {
  return <div><h1>Correct: {props.correct} Incorrect: {props.incorrect} Time Left: {props.timeLeft}</h1></div>;
}

function Unstarted(props) {
  return <h1>Press Setup Game and Then Start Game to Start</h1>;
}

function Started(props) {
  return <h1>Good Luck!</h1>;
}

function ShowResults(props) {
  const status = props.status
  switch (status) {
    case 'unstarted':
      return <Unstarted />;
    case 'started':
      return <Started />
    case 'finished':
      return <Finished correct={props.correct} incorrect={props.incorrect} timeLeft={props.timeLeft}/>
    default:
      return {}
  }
}

export default ShowResults;
