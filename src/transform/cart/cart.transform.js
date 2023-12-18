const Transform = require('../index');
const {priceFormatter} = require("../../utils/utils");
const {getAllProductsTransform, productTransform} = require('../product/product.transform')

const cartTransform = (cart) => {
    return {
        id: cart.id,
        allProductsCount: cart.allProductsCount,
        orderStatus: cart.orderStatus,
        totalPrice: cart.totalPrice,
        products: cart.CartProducts ? cartProductDetailTransform(cart.CartProducts) : null
    }

}

const cartProductDetailTransform = (CartProducts) => {
    return CartProducts && CartProducts.map((CartProduct) => {
        return {
            id: CartProduct.id,
            sumPrice: CartProduct.sumPrice,
            productCount: CartProduct.productCount,
            CartId: CartProduct.CartId,
            ProductId: CartProduct.ProductId,
            product: productTransform(CartProduct.Product)
        }
    })

}

module.exports = {
    cartTransform
}