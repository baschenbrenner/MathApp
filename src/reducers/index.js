import { combineReducers } from 'redux'
import { createStore } from 'redux';
import mathReducers from './mathReducer'
import thunk from 'redux-thunk';
// we wrap store in a function for testing purposes
export const configureStore = () => {
  return createStore(mathReducers, applyMiddleware(thunk))
}

const rootReducer = combineReducers({mathsReducers})
