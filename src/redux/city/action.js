/* action types */
export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

/* action creators */
export const setToCityList = item => ({ type: ADD_CITY, payload: item });
export const removeFromCityList = item => ({ type: REMOVE_CITY, payload: item });