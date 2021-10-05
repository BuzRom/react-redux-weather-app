import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as weatherReducer } from './weatherReducer';


export const store = createStore(
   combineReducers({
      weather: weatherReducer,
   }),
   composeWithDevTools(applyMiddleware(thunk)),
);

