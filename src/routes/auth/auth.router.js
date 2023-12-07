const express = require('express');
const authRouter = express.Router();

const authController = require('../../controllers/auth/auth.controller');

const {registerValidator} = require('../../middlewares/validations/auth');

const {checkErrors} = require('../../middlewares/error/checkValidationError')

authRouter.post('/register', registerValidator(),  (req, res, next) => {checkErrors(req, res, next)}, authController.registerUser);

module.exports = authRouter;