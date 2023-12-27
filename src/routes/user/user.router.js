const express = require('express');
const userRouter = express.Router();
const {checkErrors} = require('../../middlewares/error/checkValidationError');
const {updateUserValidator} = require('../../middlewares/validations/user.validation');

const userController = require('../../controllers/user/user.controller');

userRouter.get('/getUserProfile', (req, res, next) => {
    checkErrors(req, res, next)
}, userController.getUserProfile);

userRouter.patch('/updateUser', updateUserValidator(), (req, res, next) => {
    checkErrors(req, res, next)
}, userController.updateUser);

module.exports = userRouter