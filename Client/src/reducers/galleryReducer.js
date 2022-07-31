import { PRODUCT_GALLERY } from '../actions/types'


const gallyerReducer = (state = '', action) => {
    if (action.type === PRODUCT_GALLERY) {
        return state = action.payload
    } else {
        return state;
    }
}


export default gallyerReducer