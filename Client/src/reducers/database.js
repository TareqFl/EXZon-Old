import { FETCH_ALL, FETCH_PRODUCT } from '../actions/types'

const INITIAL_STATE = {
    products: null,
    product: null
}

const fetchDatabase = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL:

            return { ...state, products: action.payload }

        case FETCH_PRODUCT:
            return { ...state, product: action.payload }
        default:
            return state;
    }
}



export default fetchDatabase;