const {Brand} = require('../../models');

const findBrand = async(filter) => {
    return await Brand.findOne({
        where: filter
    })
}

const getAllBrands = async () => {
    return await Brand.findAll();
}

const createBrand = async (data) => {
    return await Brand.create(data);
}

const updateBrand = async (data, filter) => {
    return Brand.update(data, {where: filter});
}

module.exports = {
    findBrand,
    getAllBrands,
    createBrand,
    updateBrand
}
