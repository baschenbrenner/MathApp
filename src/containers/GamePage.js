import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { setNumbersForGame, startGame, endGame, resetGame, addUnanswered } from '../actions/gameActions';
import AnswerInput from '../components/AnswerInput';
import ShowResults from '../components/ShowResults';

class GamePage extends Component {
  constructor() {
      super();

      this.increaseIndex = this.increaseIndex.bind(this)
      this.subtractTime = this.subtractTime.bind(this)
      this.startGame = this.startGame.bind(this)
      this.restartTimer = this.restartTimer.bind(this)
      this.resetGame = this.resetGame.bind(this)

      this.state = {
        index: 0,
        totalTimeLeft: 50,
        questionTimeLeft: 5
      };
    }

increaseIndex() {
  this.setState({
    index: this.state.index + 1,
  })
}
subtractTime() {
  let totalLeft = this.state.totalTimeLeft - 1
  let questionTimeLeft = this.state.questionTimeLeft - 1
  this.setState({
      totalTimeLeft: totalLeft,
       questionTimeLeft: questionTimeLeft
  })
  if ((this.state.totalTimeLeft > 0) && (this.props.game.status !== "finished"))
  {
      if (this.state.questionTimeLeft === 0)
        { this.props.addUnanswered()
          this.increaseIndex()
          this.setState({
            questionTimeLeft: 5
          })
          setTimeout(this.subtractTime,1000)
        }
      else {setTimeout(this.subtractTime,1000)}
    }
}

startTimers() {
  setTimeout(this.subtractTime,1000)
}

startGame = () => {
  this.props.setNumbersForGame()
  this.setState({
    index: 1
  })
  this.props.startGame()
  this.startTimers()
}


restartTimer() {
  let currentIndex = this.state.index
  if (currentIndex < 10)
      {this.setState({
        index: currentIndex + 1,
        questionTimeLeft: 5
      })}
  else
      {this.props.endGame()}
}

resetGame() {
  this.setState({
    index: 0,
    questionTimeLeft: 5,
    totalTimeLeft: 50
  })
  this.props.resetGame()
}


componentDidUpdate() {
  console.log("My index is " + this.state.index)
  console.log(Date.now())

}


  render() {
    const {match, game} = this.props
    return (
      <div>Game Page
        <br/> Solve this:
        <p>
          {this.props.game.numberSetA[this.state.index]} x {this.props.game.numberSetB[this.state.index]}
        </p>
        <AnswerInput index={this.state.index} restartTimer={this.restartTimer}/>
        <br/>
        <br/>
        <br/>
        <ShowResults
         status={this.props.game.status}
         correct={this.props.game.numberCorrect}
         incorrect={this.props.game.numberIncorrect}
         unanswered={this.props.game.numberUnanswered}
         timeLeft={this.state.totalTimeLeft}/>
        <br/>

        <button onClick={this.startGame}>Start Game</button>
        <button onClick={this.resetGame}>Reset Game</button>
        <br/>

        <h2>Time Left for Question: {this.state.questionTimeLeft}</h2>
        <br/>
        <br/>
        <br/>
        <h3>Time Left for Game: {this.state.totalTimeLeft}</h3>

      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps, { setNumbersForGame, startGame, endGame, resetGame, addUnanswered })(GamePage);
