const router = require('express').Router()
const database = require('../controllers')

router.get('/', database.fetchAllData)

router.post('/post', database.insertMany)

router.post('/cart', database.fetchCarts)
router.post('/cartid', database.cartId)
router.post('/cartcode', database.cartCode)
router.post('/addcart', database.addCart)
router.post('/deletecartitem', database.deleteItem)
router.delete('/deleteCart', database.deleteCart)

module.exports = router