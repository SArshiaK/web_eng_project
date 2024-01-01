const jwt = require('jsonwebtoken');
const {User, Admin} = require('../models');
const requireAuth = (req, res, next) => {
    const token = req.headers.token;
    if(!token)
        return res.status(400).send({success: false, message: "توکن را ارسال کنید"});

    jwt.verify(token, process.env.USER_SECRET, async (err, decodedToken) => {
        if(err){
            return res.status(400).send({success: false, message: 'توکن نامعتبر'});
        }

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

const requireAdminAuth = (req, res, next) => {
    const token = req.headers.token;
    if(!token)
        return res.status(400).send({success: false, message: "توکن را ارسال کنید"});

    jwt.verify(token, process.env.ADMIN_SECRET, async (err, decodedToken) => {
        if(err){
            return res.status(400).send({success: false, message: 'توکن نامعتبر'});
        }

        const user = await Admin.findOne({
            where: {id: decodedToken['id']}
        })
        if(!user){
            return res.status(400).send({ success: false, message: "Admin not found" });
        }

        if(!user.active){
            return res.status(400).send({ success: false, message: "Admin is blocked" });
        }

        req.Admin = user;
        next();
    })
}


module.exports = {
    requireAuth,
    requireAdminAuth
}