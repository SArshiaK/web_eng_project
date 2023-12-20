const express = require('express');
const userRouter = express.Router();
const {checkErrors} = require('../../middlewares/error/checkValidationError')

const userController = require('../../controllers/user/user.controller');

userRouter.get('/getUserProfile', (req, res, next) => {
    checkErrors(req, res, next)
}, userController.getUserProfile);

module.exports = userRouter