const express = require('express');
const authRouter = express.Router();

const adminAuthController = require('../../controllers/Admin/auth/auth.controller');

// const {registerValidator, loginValidator} = require('../../middlewares/validations/auth');

const {checkErrors} = require('../../middlewares/error/checkValidationError')

authRouter.post('/register',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)}, adminAuthController.registerAdmin);

authRouter.post('/login',
    // registerValidator(),
    (req, res, next) => {checkErrors(req, res, next)}, adminAuthController.adminLogIn);

module.exports = authRouter;