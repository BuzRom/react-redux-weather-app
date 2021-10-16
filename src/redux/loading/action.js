import axios from 'axios';
import { setToCityList } from '../city/action';

/* action types */
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const getLocalWeather = () => {
   return (dispatch) => {
      dispatch(fetchStarted());
      navigator.geolocation.getCurrentPosition(location => {
         const lat = (location.coords.latitude);
         const lng = (location.coords.longitude);
         axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(res => {
               dispatch(fetchSuccess(true));
               dispatch(setToCityList(res.data));
            })
            .catch(error => {
               dispatch(fetchError(error.message || true));
            });
      }, onError => { dispatch(fetchError()) });
   };
};

export const getCurrentCityWeather = (city) => {
   return (dispatch) => {
      dispatch(fetchStarted());
      axios
         .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
         .then(res => {
            dispatch(fetchSuccess(true));
            dispatch(setToCityList(res.data));
         })
         .catch(error => {
            dispatch(fetchError(error.message || true));
         });
   };
};