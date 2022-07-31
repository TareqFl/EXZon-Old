import { INITIATE_CART } from '../actions/types'

const initiateCart = (state = '', action) => {
    switch (action.type) {
        case INITIATE_CART:

            return state = 'Cart Initiated'

        default:
            return state
    }
}


export default initiateCart