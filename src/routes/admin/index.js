const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const productRouter = require('./produtc');


// const {requireAuth} = require('../middlewares/auth.middleware');


router.use('/auth', authRouter);
router.use('/product', productRouter);

module.exports = router;