const express = require('express');
const router = express.Router();

const authRouter = require('./auth/auth.router');
const productRouter = require('./product/product.router');
const cartRouter = require('./cart/cart.router');
const brandRouter = require('./brand/brand.router');
const userRouter = require('./user/user.router');
const paymentRouter = require('./payment/payment.router');

const adminRouter = require('./admin/index');

const {requireAuth} = require('../middlewares/auth.middleware');


router.use('/auth', authRouter);
router.use('/product', requireAuth, productRouter);
router.use('/cart', requireAuth, cartRouter);
router.use('/brand', requireAuth, brandRouter);
router.use('/user', requireAuth, userRouter);
router.use('/payment', paymentRouter);

router.use('/admin', adminRouter);

module.exports = router;