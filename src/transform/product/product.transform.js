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
        ramSize: product.Ram ? `${product.Ram.size} GB` : null,
        osType: product.OpSystem ? product.OpSystem.type : null,
        osVersion: product.OpSystem ? product.OpSystem.version : null,
        storageSize: product.Storage ? `${product.Storage.size} GB` : null,
        sdCard:  product.sdCard === false ? 'فاقد پشتیبانی از کارت حافظه' : 'از کارت حافظه پشتیبانی میکند' ,
        simNum: product.simNum ? product.simNum === 1 ? 'یک عدد' : 'دو عدد' : null,
        specials: product.ProductSpecials ?  productSpecialsString(product.ProductSpecials) : 'ویژگی خاصی نداره'
    }
}

const productSpecialsString = (productSpecials) => {
    let specials = '';
    productSpecials.map((productSpecial) => {
        specials += productSpecial?.Special?.title + '\n';
    })
    return specials
}

module.exports = {
    getAllProductsTransform,
    getProductsPaginateTransform,
    productTransform
}