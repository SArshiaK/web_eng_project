const models= require('../../models');
const createDetail = async (model, data) => {
    return models[model].create(data);
}

const updateDetail = async (model, data, filter) => {
    return models[model].update(data, {where: filter});
}

const deleteDetail = async (model, filter) => {
    return await models[model].destroy({where: filter});
}

const getAllDetail = async (model) => {
    return await models[model].findAll();
}


module.exports = {
    createDetail,
    updateDetail,
    deleteDetail,
    getAllDetail
}
