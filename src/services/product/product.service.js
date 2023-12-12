const {Product, Brand} = require('../../models');

const getAllProducts = async () => {
    return await Product.findAll({
        include: {
            model: Brand,
            attributes:['title']
        }
    });
}

const getProductPaginate = async (page) => {
    return await Product.paginate({
        page,
        paginate: 10,
        include: {
            model: Brand,
            attributes: ['title']
        }
    })
}

module.exports = {
    getAllProducts,
    getProductPaginate
}