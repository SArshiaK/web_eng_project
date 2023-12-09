const {User: AuthService} = require('../../models');
const jwt = require('jsonwebtoken');

const maxAge = 5*24 * 60 * 60;

const createToken = (userName, id) => {
    return jwt.sign({userName, id}, process.env.USER_SECRET, {
        expiresIn: maxAge,
    })
}
const registerUser = async(data) => {
    const user = await AuthService.create(data);
    const token = createToken(user.userName, user.id);

    return {token, user}
}

const findUser = async (filter) => {
    const user =  await AuthService.findOne({where: filter});
    const token = user && createToken(user.userName, user.id);

    return {token, user}
}

module.exports = {
    registerUser,
    findUser
}