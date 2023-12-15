const Transform = require('../index');
const {priceFormatter} = require("../../utils/utils");

const getAllProductsTransform = (products) => {

    return products && products.map((product) => {
        return productTransform(product)
    })
}

const getProductsPaginateTransform = (products) => {
    return {
        pages: products.pages,
        total: products.total,
        products: products?.docs && products.docs.map((product) => {
            return productTransform(product)
        })
    }
}

const productTransform = (product) => {
    return {
        id: product.id,
        title: product.title,
        price: product.price ? priceFormatter(product.price) : 'ناموجود',
        description: product.description,
        placeHolderImg: `products/${product.placeHolderImg}`,
        brandId: product.BrandId,
        brandTitle: product.Brand ? product.Brand.title : null,
        ramSize: product.Ram ? product.Ram.size : null,
        osType: product.OpSystem ? product.OpSystem.type : null,
        osVersion: product.OpSystem ? product.OpSystem.version : null,
        storageSize: product.Storage ? product.Storage.size : null,
    }
}

module.exports = {
    getAllProductsTransform,
    getProductsPaginateTransform,
    productTransform
}