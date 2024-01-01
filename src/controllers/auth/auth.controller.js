const authServices = require('../../services/auth/auth.service');
const {userProfileTransform} = require("../../transform/user/user.transform");

const bcrypt = require('bcrypt');

async function comparePassword(plaintextPassword, hash) {
    return await bcrypt.compare(plaintextPassword, hash);
}

const registerUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const {token, user} = await authServices.registerUser(req.body);

        res.status(201).json({
            success: true,
            message: 'ثبت نام انجام شد',
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
        const {token, user} = await authServices.findUser({userName: req.body.userName});
        const result = await comparePassword(req.body.password, user.password);
        if(!result)
            throw 'رمز عبور اشتباه است'

        if(!user)
            throw 'نام کاربر ی یا کلمه عبور اشتباه است';

        res.status(200).json({
            success: true,
            message: 'با موفقیت وارد شدید',
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