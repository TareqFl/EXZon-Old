import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/types";


const sideBar = (state = false, action) => {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return state = true

        case CLOSE_SIDEBAR:
            return state = false
        default:
            return state;
    }
}

export default sideBar