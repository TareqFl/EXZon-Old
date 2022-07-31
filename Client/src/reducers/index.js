import { combineReducers } from "redux";

import isSignedIn from './auth'
import allProducts from './database'
import modal from './modal'
import sideBar from './sideBar'
import cartItems from "./cartReducer";
import gallery from './galleryReducer'
import totalAmount from './totalAmount'
import cartId from './cartId'
import initiateCart from './initiateCartReducer'
import mode from './themeReducer'
import { reducer as formReducer } from 'redux-form'
export default combineReducers({
    isSignedIn,
    allProducts,
    modal,
    sideBar,
    cartItems,
    gallery,
    totalAmount,
    cartId,
    initiateCart,
    mode,
    form: formReducer

})