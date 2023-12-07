const {User} = require('../../models');

const findUser = async (filter) => {
    return await User.findOne({where: filter});
}

module.exports = {
    findUser
}