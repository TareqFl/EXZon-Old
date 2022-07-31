import { SIGN_IN, SIGN_OUT } from '../actions/types'


const authentication = (state = false, action) => {
    switch (action.type) {
        case SIGN_IN:
            return state = true

        case SIGN_OUT:
            return state = false
        default:
            return state;
    }
}

export default authentication