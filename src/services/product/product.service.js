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

const getProductPaginate = async (page, search='', order) => {
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
        },
        order: [order],
    })
}

const createProductFilters = (data) => {
    return {
        ...data.simNum && {
            simNum: data.simNum,
        },
        ...data.simNum && {
            sdCard:  data.sdCard,
        },
        ...data.brandId && {
            brandId: {
                [Op.in]: data.brandId,
            },
        },
        ...data.priceRange && {
            price: {
                [Op.gt]: data.priceRange[0],
                [Op.lt]: data.priceRange[1],
            },
        }

    }

}

const getProductPaginateByFilters = async (data) => {
    return await Product.paginate({
        page: data.page,
        paginate: 5,
        include: {
            model: Brand,
            attributes: ['title']
        },
        where:{
            title: {
                [Op.like]: `%${data.search}%`
            },
            ...createProductFilters(data)

        },
        order: [data.order],

    })
}

const findProduct  = async (filter) => {
    return await  Product.findOne({
        where: filter,
        include: {
            model: Brand,
            attributes: ['title']
        }
    });
}

module.exports = {
    getAllProducts,
    getProductPaginate,
    getProductPaginateByFilters,
    findProduct
}