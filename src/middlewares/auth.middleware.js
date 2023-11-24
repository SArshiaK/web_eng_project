const jwt = require('jsonwebtoken');
const {User} = require('../models');
const requireAuth = (req, res, next) => {
    const token = req.headers.token;
    if(!token)
        return res.status(400).send({success: false, message: "token doesn't exist"});

    jwt.verify(token, process.env.USER_SECRET, async (err, decodedToken) => {
        if(err)
            return res.status(400).send({success: false, message: err.message});

        const user = await User.findOne({
            where: {id: decodedToken['id']}
        })
        if(!user){
            return res.status(400).send({ success: false, message: "User not found" });
        }

        if(!user.active){
            return res.status(400).send({ success: false, message: "User is blocked" });
        }

        req.User = user;
        next();
    })
}

module.exports = {
    requireAuth
}