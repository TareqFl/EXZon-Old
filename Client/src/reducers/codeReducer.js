import { CART_CODE } from '../actions/types'


const cartCode = (state = '', action) => {
    switch (action.type) {
        case CART_CODE:
            return state = action.payload

        default:
            return state;
    }
}

export default cartCode