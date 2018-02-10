import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import mathReducer from './mathReducer'
import gameReducer from './gameReducer'
import thunk from 'redux-thunk';


// we wrap store in a function for testing purposes
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
      // other store enhancers if any
    );
const rootReducer = combineReducers({
  math: mathReducer,
  game: gameReducer})

  export const configureStore = () => {
    return createStore(rootReducer, enhancer)
      // ;

  }
