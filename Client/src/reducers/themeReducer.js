import { DARK_MODE, LIGHT_MODE } from "../actions/types";

const themeReducer = (state = 'dark', action) => {
    switch (action.type) {
        case DARK_MODE:
            return state = 'dark'
        case LIGHT_MODE:
            return state = 'light'
        default:
            return state
    }
}


export default themeReducer