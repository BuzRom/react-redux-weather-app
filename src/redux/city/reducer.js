import produce from 'immer';
import { ADD_CITY, REMOVE_CITY } from './action';
// import { setLocalStorageData, getLocalStorageData, clearLocalStorageData } from '../../auxiliary/localstorage';


const initialState = { items: [] };

export const reducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case ADD_CITY:
                // let localStorageData = JSON.parse(getLocalStorageData('city')) || [];
                // let data = [...localStorageData, action.payload];
                // setLocalStorageData('city', data);
                if (state.items.map(item => item.city.id).includes(action.payload.city.id)) {
                    return { ...state };
                }
                draft.items.push(action.payload);
                break;
            case REMOVE_CITY:
                return {
                    items: state.items.filter((item) => item.city.id !== action.payload)
                };
            default:
                return state;
        }
    });
}
