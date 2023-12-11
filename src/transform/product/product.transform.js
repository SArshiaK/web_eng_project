const Transform = require('../index');

const getAllProductsTransform = (products) => {

    return products && products.map((product) => {
        return productTransform(product)
    })
}

const productTransform = (product) => {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        placeHolderImg: `products/${product.placeHolderImg}`,
        brandId: product.BrandId,
        brandTitle: product.Brand ? product.Brand.title : null
    }
}

module.exports = {
    getAllProductsTransform,
}