import {
    SIGN_IN, SIGN_OUT,
    FETCH_ALL, OPEN_MODAL,
    CLOSE_MODAL, OPEN_SIDEBAR,
    CLOSE_SIDEBAR, REMOVE_ITEM,
    ADD_ITEM, FETCH_PRODUCT,
    PRODUCT_GALLERY, AMOUNT_TO_PAY,
    FETCH_CART_ITEMS, DELETE_CART,
    CART_ID, CART_CODE,
    INITIATE_CART,
    DARK_MODE, LIGHT_MODE


} from './types'


import db from '../api'
import _ from 'lodash'
import nextId from 'react-id-generator'
//Authentication
export const signIn = () => {
    return {
        type: SIGN_IN
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

// database requests
export const fetchAll = () => async dispatch => {
    const response = await db.get()
    dispatch({
        type: FETCH_ALL,
        payload: response.data
    })
}

export const fetchProduct = (value) => async dispatch => {
    const response = await db.get()

    const product = response.data.find(item => item.name === value)

    dispatch({
        type: FETCH_PRODUCT,
        payload: product
    })
}

export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const openSideBar = () => {
    return {
        type: OPEN_SIDEBAR
    }
}

export const closeSideBar = () => {
    return {
        type: CLOSE_SIDEBAR
    }
}



// fetching cart and adding items to cart
export const initiateCart = code => async dispatch => {
    await db.post('/addcart', { code })
    dispatch({
        type: INITIATE_CART
    })
}
export const getCartCode = id => async dispatch => {
    const response = await db.post('/cartcode', { id })
    dispatch({
        type: CART_CODE,
        payload: response.data
    })
}

export const getCartId = id => async dispatch => {
    const response = await db.post('/cartid', { code: id })
    dispatch({
        type: CART_ID,
        payload: response.data
    })
}
export const fetchCart = id => async dispatch => {
    const response = await db.post('/cart', { code: id })
    dispatch({
        type: FETCH_CART_ITEMS,
        payload: response.data
    })

}

export const addItem = (item, code) => async dispatch => {
    let newItem = _.omit(item, ['_id'])
    const response = await db.post('/addcart', { items: { ...newItem, uid: nextId() }, code })
    dispatch({
        type: ADD_ITEM,
        payload: response.data
    })
}


export const removeItem = (item, code) => async dispatch => {
    let newItem = _.omit(item, ['_id'])
    const response = await db.post('/deletecartitem', { items: newItem, code })
    dispatch({
        type: REMOVE_ITEM,
        payload: response.data
    })
}
export const deleteCart = id => async dispatch => {
    await db.delete('/deleteCart', { id })
    dispatch({
        type: DELETE_CART
    })

}
export const productGallery = (value) => {
    return {
        type: PRODUCT_GALLERY,
        payload: value
    }
}


// calculate total amount of items

export const calculateAmountSum = (value) => async dispatch => {


    let totalAmount = value.map(item => item.price);

    let sum = 0;
    for (let i = 0; i < totalAmount.length; i++) {
        sum += totalAmount[i];
    }


    dispatch({
        type: AMOUNT_TO_PAY,
        payload: sum
    })
}

// mui theme mode

export const darkMode = () => {
    return {
        type: DARK_MODE
    }
}

export const lightMode = () => {
    return {
        type: LIGHT_MODE
    }
}