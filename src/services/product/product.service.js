const {Product, Brand} = require('../../models');

const getAllProducts = async () => {
    return await Product.findAll({
        include: {
            model: Brand,
            attributes:['title']
        }
    });
}

module.exports = {
    getAllProducts
}