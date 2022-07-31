import { CART_ID } from '../actions/types'

const getCartId = (state = null, action) => {
    switch (action.type) {
        case CART_ID:

            return state = action.payload

        default:
            return state
    }
}


export default getCartId