const Products = require('../models/Products')
const Cart = require('../models/cart')
const _ = require('lodash')

// fetch all products to display 
exports.fetchAllData = async (req, res) => {

    try {
        const response = await Products.find()
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.insertMany = async (req, res) => {
    const db = req.body
    // try {
    //     const response = await Products.insertMany(db)
    //     res.status(200).json(response)
    // } catch (err) {
    //     res.status(500).json(err)
    // }
    console.log(db)
}

//get  cart id
exports.cartId = async (req, res) => {
    const { code } = req.body

    try {
        const response = await Cart.findOne({ code })
        if (!response) {
            return
        }
        if (response) {
            res.status(200).json(response.id)
        }

    } catch (err) {
        res.status(500).json(err)
    }
}

// get cart Code
exports.cartCode = async (req, res) => {
    const { id } = req.body
    try {
        const response = await Cart.findOne({ id })
        if (response) {
            res.status(200).json(response.code)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}
//get all cart items
exports.fetchCarts = async (req, res) => {
    const { code } = req.body

    try {
        const response = await Cart.findOne({ code })
        // res.status(200).json(response.items)
        if (!response) {
            return
        }
        if (response) {
            res.status(200).json(response.items)
        }

    } catch (err) {
        console.log(err)
    }
}

// add items to cart
exports.addCart = async (req, res) => {
    const { code, items } = req.body

    const newCart = new Cart({ ...req.body })
    try {
        const cart = await Cart.findOne({ code })
        if (!cart) {
            newCart.save()
            res.status(200).json(newCart.items)
        }
        if (cart) {
            const update = await Cart.findOneAndUpdate({ code }, { $push: { items } })
            res.status(200).json(items)

        }
    } catch (error) {
        res.status(500).json(error)
    }

}

// delete an item from cart
exports.deleteItem = async (req, res) => {
    const { items, code } = req.body
    try {
        await Cart.findOneAndUpdate({ code }, { $pull: { items } })

        const response = await Cart.findOne({ code })
        res.status(200).json(response.items)

    } catch (error) {
        res.status(500).json(error)
    }

}
//delete cart
exports.deleteCart = async (req, res) => {
    const { id } = req.body
    await Cart.findOneAndUpdate({ id }, { $set: { items: [] } })
}

