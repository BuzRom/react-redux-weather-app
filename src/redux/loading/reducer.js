import produce from 'immer';
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './action'

export const initialState = { isFetching: false, isSuccess: false, isError: false };

export const reducer = (state = initialState, action) => {
   return produce(state, draft => {
      switch (action.type) {
         case FETCH_START:
            draft.isFetching = true;
            draft.isSuccess = false;
            draft.isError = false;
            break;
         case FETCH_SUCCESS:
            draft.isFetching = false;
            draft.isSuccess = true;
            draft.isError = false;
            break;
         case FETCH_ERROR:
            draft.isFetching = false;
            draft.isSuccess = false;
            draft.isError = true;
            break;
         default:
            return state;
      }
   });
};
