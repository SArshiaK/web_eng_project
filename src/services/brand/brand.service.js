const {Brand} = require('../../models');

const findBrand = async(filter) => {
    return await Brand.findOne({
        where: filter
    })
}

const getAllBrands = async () => {
    return await Brand.findAll();
}

module.exports = {
    findBrand,
    getAllBrands
}
