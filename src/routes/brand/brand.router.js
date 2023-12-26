const express = require('express');
const brandRouter = express.Router();

const brandController = require('../../controllers/brand/brand.controller');

// const {registerValidator, loginValidator} = require('../../middlewares/validations/products');

const {checkErrors} = require('../../middlewares/error/checkValidationError')

brandRouter.get('/getBrands',
    (req, res, next) => {checkErrors(req, res, next)},
    brandController.getAllBrands);

module.exports = brandRouter;