const Transform = require('../index');

const userProfileTransform = (user, token) => {
    return {
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        active: user.active,
        token,
    }
}

module.exports = {
    userProfileTransform,
}