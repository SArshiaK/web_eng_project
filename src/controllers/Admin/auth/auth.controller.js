const authServices = require('../../../services/auth/auth.service');

const bcrypt = require('bcrypt');
const {userProfileTransform} = require("../../../transform/user/user.transform");

async function comparePassword(plaintextPassword, hash) {
    return await bcrypt.compare(plaintextPassword, hash);
}

const registerAdmin = async (req, res) => {
    try {
        if(req.headers['my-secret-key'] !== process.env.MY_ADMIN_SECRET)
            throw {message: 'شما اجازه دسترسی ندارید'}
        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const {token, user} = await authServices.registerAdmin(req.body);

        res.status(201).json({
            success: true,
            message: 'ثبت نام انجام شد',
            data: {user, token}
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

const adminLogIn = async (req, res) => {
    try {
        const {token, user} = await authServices.findAdmin({userName: req.body.userName});
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
    registerAdmin,
    adminLogIn
}