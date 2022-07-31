import { AMOUNT_TO_PAY } from "../actions/types"



const totalAmount = (state = 0, action) => {
    switch (action.type) {
        case AMOUNT_TO_PAY:

            return state = action.payload

        default:
            return state;
    }
}
export default totalAmount