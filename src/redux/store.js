import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as weatherReducer } from './weather/reducer';
import { reducer as cityReducer } from './city/reducer';


export const store = createStore(
   combineReducers({
      weather: weatherReducer,
      city: cityReducer,
   }),
   composeWithDevTools(applyMiddleware(thunk)),
);

