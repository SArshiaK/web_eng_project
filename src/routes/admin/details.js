const express = require('express');
const detailsRouter = express.Router();

const adminDetailsController = require('../../controllers/Admin/details/details.controller');


const {checkErrors} = require('../../middlewares/error/checkValidationError')

detailsRouter.post('/create',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.createDetail);


detailsRouter.patch('/update/:id',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.updateDetail);

detailsRouter.delete('/delete/:id',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.deleteDetail);

detailsRouter.get('/getAll',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)},
    adminDetailsController.getAllDetails);

module.exports = detailsRouter