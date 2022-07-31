
import { ADD_ITEM, FETCH_CART_ITEMS, REMOVE_ITEM, DELETE_CART } from '../actions/types'

import _ from 'lodash'

const INITIAL_STATE = []

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CART_ITEMS:
            return state = action.payload
        case ADD_ITEM:
            return [...state, action.payload]
        case REMOVE_ITEM:
            return state = action.payload
        case DELETE_CART:
            return state;

        default:
            return state;
    }

}

export default cartReducer