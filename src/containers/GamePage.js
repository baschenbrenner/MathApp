import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { setNumbersForGame } from '../actions/gameActions';
import AnswerInput from '../components/AnswerInput'


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
handleOnClick = () => {
  this.props.setNumbersForGame()
}

componentDidUpdate(){
  console.log("hey")
  if (this.state.index < 5) {
  setTimeout(this.increaseIndex,5000)}
}
  render() {
    const {match, game} = this.props
    return (
      <div>Game Page
        <br/> Solve this:
        <p>
        {game.numberSetA[this.state.index]} x {game.numberSetB[this.state.index]}
        </p>
        <AnswerInput />
        <button onClick={this.handleOnClick}>Start Game</button>

      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps, { setNumbersForGame })(GamePage);
