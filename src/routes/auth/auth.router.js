const express = require('express');
const authRouter = express.Router();

const authController = require('../../controllers/auth/auth.controller');

authRouter.post('/register', authController.registerUser);

module.exports = authRouter;