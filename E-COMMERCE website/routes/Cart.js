const express = require('express')
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require('../controller/Cart')


const router = express.Router()
// /cart is already added in base path
router.post('/', addToCart)
    .get('/', fetchCartByUser)
    .delete('/:id', deleteFromCart)
    .patch('/:id', updateCart)
 
exports.router = router