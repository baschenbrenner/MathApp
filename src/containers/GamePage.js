import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { setNumbersForGame } from '../actions/gameActions';



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
  setTimeout(this.increaseIndex,5000)
}
  render() {

    const {game}= this.props
    return (
      <div>Game Page
      <br/>
      Solve this:
      <p>
      {this.props.game.numberSetA[this.state.index]} x {this.props.game.numberSetB[this.state.index]}
      </p>
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
