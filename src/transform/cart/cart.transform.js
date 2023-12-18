const Transform = require('../index');
const {priceFormatter} = require("../../utils/utils");
const {getAllProductsTransform, productTransform} = require('../product/product.transform')
const {ORDER_STATUS} = require("../../static");

const cartTransform = (cart) => {
    return {
        id: cart.id,
        allProductsCount: cart.allProductsCount,
        orderStatus: cart.orderStatus,
        orderStatusFormat: ORDER_STATUS[cart.orderStatus],
        totalPrice: cart.totalPrice,
        totalPriceFormat: cart.totalPrice ? priceFormatter(cart.totalPrice) : null,
        products: cart.CartProducts ? cartProductDetailTransform(cart.CartProducts) : null
    }

}

const cartProductDetailTransform = (CartProducts) => {
    return CartProducts && CartProducts.map((CartProduct) => {
        return {
            id: CartProduct.id,
            sumPrice: CartProduct.sumPrice,
            sumPriceFormat: CartProduct.sumPrice ? priceFormatter(CartProduct.sumPrice) : null,
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