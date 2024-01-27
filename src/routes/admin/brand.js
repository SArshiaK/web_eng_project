const express = require('express');
const brandRouter = express.Router();

const adminBrandController = require('../../controllers/Admin/brand/brand.controller');

// const {registerValidator, loginValidator} = require('../../middlewares/validations/auth');

const {checkErrors} = require('../../middlewares/error/checkValidationError')

brandRouter.post('/createBrand',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminBrandController.createBrand);

brandRouter.patch('/updateBrand/:id',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminBrandController.updateBrand);

module.exports = brandRouter;