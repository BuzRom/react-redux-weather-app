/* action types */
export const UPDATE_CITY_LIST = 'UPDATE_CITY_LIST';
export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

/* action creators */
export const updateCityList = item => ({ type: UPDATE_CITY_LIST, payload: item });
export const setToCityList = item => ({ type: ADD_CITY, payload: item });
export const removeFromCityList = item => ({ type: REMOVE_CITY, payload: item });