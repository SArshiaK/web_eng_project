const express = require('express');
const detailsRouter = express.Router();

const adminDetailsController = require('../../controllers/Admin/details/details.controller');


const {checkErrors} = require('../../middlewares/error/checkValidationError')

detailsRouter.post('/createSpecial',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.createSpecial);

detailsRouter.post('/createStorage',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.createStorage);

detailsRouter.post('/createRam',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.createRam);

detailsRouter.post('/createOpSystem',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.createOpSystem);

detailsRouter.post('/createProductSpecial',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.createProductSpecial);

detailsRouter.patch('/updateOpSystem/:id',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.updateOpSystem);

detailsRouter.patch('/updateRam/:id',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.updateRam);

detailsRouter.patch('/updateSpecial/:id',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.updateSpecial);

detailsRouter.patch('/updateStorage/:id',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.updateStorage);

detailsRouter.patch('/updateProductSpecial/:id',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.updateProductSpecial);
module.exports = detailsRouter;