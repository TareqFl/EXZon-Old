import { FETCH_CART_ITEMS } from "../actions/types";


const INITIAL_STATE = {
    items: null
}
const fetchCart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CART_ITEMS:

            return { ...state, items: action.payload }

        default:
            return state;
    }
}
export default fetchCart