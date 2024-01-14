const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const productRouter = require('./produtc');
const brandRouter = require('./brand');
const detailRouter = require('./details');


const {requireAdminAuth} = require('../../middlewares/auth.middleware');


router.use('/auth', authRouter);
router.use('/product', requireAdminAuth, productRouter);
router.use('/brand', requireAdminAuth, brandRouter);
router.use('/details', requireAdminAuth, detailRouter);

module.exports = router;