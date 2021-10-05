import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './weatherAction'

export const initialState = { isFetching: false, data: null, isError: false };

export const reducer = (state = initialState, action = {}) => {
   switch (action.type) {
      case FETCH_START: {
         return { ...state, isFetching: true, data: null, isError: false };
      }
      case FETCH_SUCCESS: {
         return { ...state, isFetching: false, data: action.payload, isError: false };
      }
      case FETCH_ERROR: {
         return { ...state, isFetching: false, data: null, isError: true };
      }
      default:
         return state;
   }
};
