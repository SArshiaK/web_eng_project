const {Product, Brand} = require('../../models');

const {Op} = require('sequelize')

const getAllProducts = async () => {
    return await Product.findAll({
        include: {
            model: Brand,
            attributes:['title']
        }
    });
}

const getProductPaginate = async (page, search='') => {
    return await Product.paginate({
        page,
        paginate: 5,
        include: {
            model: Brand,
            attributes: ['title']
        },
        where:{
            title: {
                [Op.like]: `%${search}%`
            }
        }
    })
}

module.exports = {
    getAllProducts,
    getProductPaginate
}