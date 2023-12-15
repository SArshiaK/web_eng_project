const {Brand} = require('../../models');

const findBrand = async(filter) => {
    return await Brand.findOne({
        where: filter
    })
}

module.exports = {
    findBrand
}
