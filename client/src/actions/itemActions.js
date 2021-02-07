import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING, MODIFY_ITEMS } from './types';
import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/items').then(res =>
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    ).catch(err => console.log(err))
}
export const deleteItems = (id) => dispatch => {
    axios.delete(`/api/items/${id}`).then(res => dispatch({
        type: DELETE_ITEMS,
        payload: id
    })).catch(err => console.log(err))
}

export const modifyItem = (items) => dispatch => {

    axios.get(`/api/items/`).then(res1 => {
        dispatch({
            type: GET_ITEMS,
            payload: res1.data
        })
        let send = res1.data.find(element => element.ville === items.select2)
        let recv = res1.data.find(element => element.ville === items.select3)
        console.log(items)

        switch (items.select1) {
            case 'Orange':
                send.orange = parseInt(send.orange, 10) - parseInt(items.Quantity, 10)

                if (send.orange < 0) {

                    return {
                        error: true,
                        message: 'Parameter needed'
                    }
                }
                recv.orange = parseInt(recv.orange, 10) + parseInt(items.Quantity, 10)
                break;
            case 'Banane':

                send.banane = parseInt(send.banane, 10) - parseInt(items.Quantity, 10)
                if (send.banane < 0) {

                    return {
                        error: true,
                        message: 'Parameter needed'
                    }
                }
                recv.banane = parseInt(recv.banane, 10) + parseInt(items.Quantity, 10)
                break;
            case 'Pomme':
                send.pomme = parseInt(send.pomme, 10) - parseInt(items.Quantity, 10)
                if (send.pomme < 0) {

                    return {
                        error: true,
                        message: 'Parameter needed'
                    }
                }
                recv.pomme = parseInt(recv.pomme, 10) + parseInt(items.Quantity, 10)
                break;
            case 'Fraise':
                send.fraise = parseInt(send.fraise, 10) - parseInt(items.Quantity, 10)
                if (send.fraise < 0) {

                    return {
                        error: true,
                        message: 'Parameter needed'
                    }
                }
                recv.fraise = parseInt(recv.fraise, 10) + parseInt(items.Quantity, 10)
                break;
            case 'Cerise':
                send.cerise = parseInt(send.cerise, 10) - parseInt(items.Quantity, 10)
                if (send.cerise < 0) {

                    return {
                        error: true,
                        message: 'Parameter needed'
                    }
                }
                recv.cerise = parseInt(recv.cerise, 10) + parseInt(items.Quantity, 10)
                break;

            default:
                break;
        }
        send.stock = parseInt(send.stock, 10) - parseInt(items.Quantity, 10)
        recv.stock = parseInt(recv.stock, 10) + parseInt(items.Quantity, 10)

        axios.put(`/api/items/${send._id}`, send).then(res => { dispatch({ type: MODIFY_ITEMS, payload: send }) }).catch(err => console.log(err))
        axios.put(`/api/items/${recv._id}`, recv).then(res => { dispatch({ type: MODIFY_ITEMS, payload: recv }) }).catch(err => console.log(err))



    })


}

export const addItem = (item) => dispatch => {
    axios.post('/api/items', item).then(res => { dispatch({ type: ADD_ITEMS, payload: res.data }) }).catch(err => console.log(err))
    return {
        type: ADD_ITEMS,
        payload: item

    }
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING

    }
}
