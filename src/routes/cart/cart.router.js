const express = require('express');
const cartRouter = express.Router();

const cartController = require('../../controllers/cart/cart.controller');

// const {registerValidator, loginValidator} = require('../../middlewares/validations/products');

const {checkErrors} = require('../../middlewares/error/checkValidationError')

cartRouter.post('/addToCart',
    (req, res, next) => {checkErrors(req, res, next)},
    cartController.addToCart);

cartRouter.get('/getCart',
    (req, res, next) => {checkErrors(req, res, next)},
    cartController.getCart);

cartRouter.get('/getCartProductsCount',
    (req, res, next) => {checkErrors(req, res, next)},
    cartController.getCartProductsCount);

cartRouter.delete('/removeFromCart',
    (req, res, next) => {checkErrors(req, res, next)},
    cartController.removeFromCart);

module.exports = cartRouter;