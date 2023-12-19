const userService = require('../../services/user/user.service');
const {userProfileTransform} = require("../../transform/user/user.transform");

const getUserProfile = async(req, res) => {
    try {
        const user = await userService.findUser({id: req.User.id});

        res.status(200).json({
            success: true,
            message: 'اطلاعات پروفایل کاربر ارسال شد',
            data: userProfileTransform(user)
        })
    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

module.exports = {
    getUserProfile
}