const express = require('express');
const productsRouter = express.Router();

const productsController = require('../../controllers/products/product.controller');

// const {registerValidator, loginValidator} = require('../../middlewares/validations/products');

const {checkErrors} = require('../../middlewares/error/checkValidationError')

productsRouter.get('/getAllProducts',
    (req, res, next) => {checkErrors(req, res, next)},
    productsController.getAllProducts);

productsRouter.get('/getProductsPaginate',
    (req, res, next) => {checkErrors(req, res, next)},
    productsController.getProductsPaginate);

productsRouter.post('/getProductsPaginateByFilters',
    (req, res, next) => {checkErrors(req, res, next)},
    productsController.getProductsPaginateByFilters);

productsRouter.get('/getProductById/:id',
    (req, res, next) => {checkErrors(req, res, next)},
    productsController.getProductById);


module.exports = productsRouter;