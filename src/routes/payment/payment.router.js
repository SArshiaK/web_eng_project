const express = require('express');
const paymentRouter = express.Router();

const paymentController = require('../../controllers/payment/payment.controller');

// const {registerValidator, loginValidator} = require('../../middlewares/validations/products');

const {checkErrors} = require('../../middlewares/error/checkValidationError')

const {requireAuth} = require('../../middlewares/auth.middleware');

paymentRouter.get('/startPayment', requireAuth,
    (req, res, next) => {checkErrors(req, res, next)},
    paymentController.startPayment);

paymentRouter.get('/verifyPayment',
    (req, res, next) => {checkErrors(req, res, next)},
    paymentController.verifyPayment);

paymentRouter.get('/getOrderHistory', requireAuth,
    (req, res, next) => {checkErrors(req, res, next)},
    paymentController.getOrderHistory);

paymentRouter.get('/getOrderById/:id', requireAuth,
    (req, res, next) => {checkErrors(req, res, next)},
    paymentController.getOrderById);

paymentRouter.get('/getTransaction/:id', requireAuth,
    (req, res, next) => {checkErrors(req, res, next)},
    paymentController.getTransaction);

paymentRouter.get('/getTransactionsPaginate', requireAuth,
    (req, res, next) => {checkErrors(req, res, next)},
    paymentController.getTransactionsPaginate);


module.exports = paymentRouter;