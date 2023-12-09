const authServices = require('../../services/auth/auth.service');
const {userProfileTransform} = require("../../transform/user/user.transform");

const registerUser = async (req, res) => {
    try {
        const {token, user} = await authServices.registerUser(req.body);

        // TODO: hash password

        res.status(201).json({
            success: true,
            message: 'Successfully registered .',
            data: userProfileTransform(user, token)
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

const loginByUserPass = async (req, res) => {
    try {
        // TODO: decode hashed password

        const {token, user} = await authServices.findUser({userName: req.body.userName, password: req.body.password});

        if(!user)
            throw 'نام کاربر ی یا کلمه عبور اشتباه است';

        res.status(200).json({
            success: true,
            message: 'Successfully registered .',
            data:  userProfileTransform(user, token)
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e
        })
    }
}

module.exports = {
    registerUser,
    loginByUserPass
}