const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const productRouter = require('./produtc');


const {requireAdminAuth} = require('../../middlewares/auth.middleware');


router.use('/auth', authRouter);
router.use('/product', requireAdminAuth, productRouter);

module.exports = router;