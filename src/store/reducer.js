import { SET_ITEM, REMOVE_ITEM } from './type.js'

//initial state of item reducer
const initialState = {
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEM:
            return {
                items: [...state.items, action.data]
            }

        case REMOVE_ITEM:
            return {
                items: state.items.filter(item => item.id !== action.id)
            }

        default:
            return state;
    }
}
