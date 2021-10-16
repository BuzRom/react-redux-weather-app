import produce from 'immer';
import { ADD_CITY, REMOVE_CITY } from './action';


const initialState = { items: [] };

export const reducer = (state = initialState, action) => {
    return produce(state, draft => {
        const localStorageData = JSON.parse(localStorage.getItem('city')) || [];
        switch (action.type) {
            case ADD_CITY:
                const data = [...localStorageData, action.payload.city.name + ', ' + action.payload.city.country];
                if (state.items.map(item => item.city.id).includes(action.payload.city.id)) {
                    return { ...state };
                }
                // unique for objects in array = [...new Map(arr.map(item => [item[key], item])).values()]
                localStorage.setItem('city', JSON.stringify([...new Set(data)]));
                draft.items.push(action.payload);
                break;
            case REMOVE_CITY:
                localStorage.setItem('city', JSON.stringify(localStorageData.filter((item) => item !== action.payload.name + ', ' + action.payload.country)));
                return {
                    items: state.items.filter((item) => item.city.id !== action.payload.id)
                };
            default:
                return state;
        }
    });
}
