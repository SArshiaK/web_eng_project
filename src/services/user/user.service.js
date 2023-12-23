const {User} = require('../../models');

const findUser = async (filter) => {
    return await User.findOne({where: filter});
}

const updateUser = async (data, filter) => {
    return await User.update(data, {where: filter})
}

module.exports = {
    findUser,
    updateUser
}