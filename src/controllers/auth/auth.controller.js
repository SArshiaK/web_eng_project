const authServices = require('../../services/auth/auth.service');

const registerUser = async (req, res) => {
    try {
        const {token, user} = await authServices.registerUser(req.body);

        res.status(201).json({
            success: true,
            message: 'Successfully registered .',
            data: {
                token,
                user
            }
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

module.exports = {
    registerUser
}