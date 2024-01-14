const express = require('express');
const productRouter = express.Router();

const adminProductController = require('../../controllers/Admin/product/product.controller');

// const {registerValidator, loginValidator} = require('../../middlewares/validations/auth');

const {checkErrors} = require('../../middlewares/error/checkValidationError')

productRouter.post('/createProduct',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminProductController.createProduct);

module.exports = productRouter;