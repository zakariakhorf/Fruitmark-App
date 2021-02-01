import {GET_ITEMS , ADD_ITEMS ,DELETE_ITEMS} from '../actions/types' ;
import {v1 as uuid} from 'uuid'

const initialState = {
    items : [{id : uuid() , name : 'Eggs'}, {id : uuid() , name : 'Milk'} , {id : uuid() , name : 'Chikola ya sepi'},{id : uuid() , name : 'Water'}] 
}

export default function (state = initialState ,action) {
 switch (action.type) {
    case GET_ITEMS : 
    return{
        ...state
    }
    case DELETE_ITEMS : 
    return{
        ...state,
        items : state.items.filter(item => item.id !== action.payload)
    }
    case ADD_ITEMS : 
    return{
        ...state,
        items : [action.payload, ...state.items]
    }

     default: 
     return state ;


 }


    
}