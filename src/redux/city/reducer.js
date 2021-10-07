import { ADD_CITY, REMOVE_CITY, UPDATE_CITY_LIST } from './action';
import { setLocalStorageData, getLocalStorageData, clearLocalStorageData } from '../../localstorage';

const initialState = { item: JSON.parse(getLocalStorageData('city')) || [] };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            let localStorageData = JSON.parse(getLocalStorageData('city')) || [];
            let data = [...localStorageData, action.payload];
            setLocalStorageData('city', data);
            return {
                ...state,
                item: data
            };
        case REMOVE_CITY:
            return {
                item: state.item.filter((item) => item.action.payload !== action.playload)
                // item: []
            };
        case UPDATE_CITY_LIST:
            // let updatedData = action.payload.filter(item => item);
            // if (updatedData.length > 0) {
            //     clearLocalStorageData();
            //     setLocalStorageData('city', action.payload);
            //     return {
            //         ...state,
            //         item: action.payload
            //     };
            // }
            return {
                ...state
            };
        default:
            return state;
    }
};
