import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { setNumbersForGame } from '../actions/gameActions';


class GamePage extends Component {

  render() {

    const {game}= this.props
    return (
      <div>Game Page

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
