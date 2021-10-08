import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as loadingReducer } from './loading/reducer';
import { reducer as cityReducer } from './city/reducer';


export const store = createStore(
   combineReducers({
      loading: loadingReducer,
      city: cityReducer,
   }),
   composeWithDevTools(applyMiddleware(thunk)),
);

