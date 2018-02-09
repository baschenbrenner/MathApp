import { combineReducers } from 'redux'
import { createStore } from 'redux';
import mathReducer from './mathReducer'
import gameReducer from './gameReducer'
import thunk from 'redux-thunk';
// we wrap store in a function for testing purposes
export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}

const rootReducer = combineReducers({
  math: mathReducer,
  game: gameReducer})
