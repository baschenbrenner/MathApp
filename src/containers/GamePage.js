import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { setNumbersForGame, startGame } from '../actions/gameActions';
import AnswerInput from '../components/AnswerInput';


class GamePage extends Component {
  constructor() {
      super();

      this.increaseIndex = this.increaseIndex.bind(this)
      this.state = {
        index: 0
      };
    }

increaseIndex() {
  this.setState({
    index: this.state.index + 1
  })

}
handleSetup = () => {
  this.props.setNumbersForGame()
}

startGame = () => {
  this.props.startGame()
}


  render() {
    const {match, game} = this.props
    return (
      <div>Game Page
        <br/> Solve this:
        <p>
          {this.props.game.numberSetA[this.state.index]} x {this.props.game.numberSetB[this.state.index]}
        </p>
        <AnswerInput index={this.state.index}/>
        <button onClick={this.handleSetup}>Setup Game</button>
        <button onClick={this.startGame}>Start Game</button>

      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps, { setNumbersForGame, startGame })(GamePage);
