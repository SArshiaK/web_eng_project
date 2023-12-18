const express = require('express');
const router = express.Router();

const authRouter = require('./auth/auth.router');
const productRouter = require('./product/product.router');
const cartRouter = require('./cart/cart.router');

const {requireAuth} = require('../middlewares/auth.middleware');


router.use('/auth', authRouter);
router.use('/product', requireAuth, productRouter);
router.use('/cart', requireAuth, cartRouter);

module.exports = router;