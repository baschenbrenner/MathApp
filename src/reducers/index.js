import { combineReducers } from 'redux'
import { createStore } from 'redux';
import mathReducer from './mathReducer'
import gameReducer from './gameReducer'
import thunk from 'redux-thunk';
// we wrap store in a function for testing purposes


const rootReducer = combineReducers({
  math: mathReducer,
  game: gameReducer})

  export const configureStore = () => {
    return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  }
