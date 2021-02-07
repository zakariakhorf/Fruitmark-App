import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING ,MODIFY_ITEMS} from '../actions/types';
const initialState = {
    items: [],
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEMS:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case MODIFY_ITEMS:
        
            return {
                ...state
             
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;


    }
}