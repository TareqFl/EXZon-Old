const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    items: [],
    timeStamp: String
})


const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart