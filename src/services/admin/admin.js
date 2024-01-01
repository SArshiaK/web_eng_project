const {Admin} = require('../../models');

const createAdmin = async (data) => {
    return await Admin.create(data);
}

module.exports = {createAdmin}