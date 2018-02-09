import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import GamePage from '../containers/GamePage';

const App = (props) =>
  <Router>
    <div>
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/game">Play A Game!</NavLink>
      </div>
      <Route exact path="/" render={() => <h3>Welcome to My Awesome Math App</h3>} />
      <Route path="/game" component={GamePage} />
    </div>
  </Router>;

export default App;
