const express = require('express');
const router = express.Router();

const authRouter = require('./auth/auth.router');

router.use('/auth', authRouter);

module.exports = router;