const {Cart, CartProduct, Product, Brand, Ram, OpSystem, Storage, ProductSpecial, Special} = require('../../models')

const createCart = async (data) => {
    return await Cart.create(data)
}

const createCartDetail = async (data) => {
    return await CartProduct.create(data);
}

const cartExistByUserID = async (UserId) => {
    return await Cart.findOne({where: {UserId}});
}

const cartProductExistByUserID = async (CartId, ProductId) => {
    return await CartProduct.findOne({where: {ProductId, CartId}});
}

const increaseCartProductCountPrice = async (CartId, ProductId, price) => {
    await CartProduct.increment({
            'productCount': 1,
            'sumPrice': price
        }, {
            where: {
                CartId,
                ProductId
            }
        }
    )
}

const increaseCartPriceCount = async (id, price) => {
    await Cart.increment({
            'allProductsCount': 1,
            'totalPrice': price
        }, {
            where: {
                id
            }
        }
    )
}

const getCart = async (filter) => {
    return await Cart.findOne({
        where: filter,
        include: {
            model: CartProduct,
            include: {
                model: Product,
                include: [{
                    model: Brand,
                    attributes: ['title']
                }, {
                    model: Ram,
                    attributes: ['size']
                }, {
                    model: OpSystem,
                    attributes: ['version', 'type']
                }, {
                    model: Storage,
                    attributes: ['size']
                }, {
                    model: ProductSpecial,
                    include: {
                        model: Special,
                        attributes: ['title', 'description']

                    }
                }
                ],
            }
        }
    })
}

const findCartProduct = async (filter) => {
    return await CartProduct.findOne({where: filter});
}

const findAllCartProducts = async (filter) => {
    return await CartProduct.findAll({where: filter});
}

const removeFromCartProduct = async (filter) => {
    return await CartProduct.destroy({where: filter});
}

const decreaseCartProductCountPrice = async (filter, price) => {
    return await CartProduct.decrement({
            'productCount': 1,
            'sumPrice': price
        },
        {where: filter});
}

const decreaseCartPriceCount = async (id, price) => {
    await Cart.decrement({
            'allProductsCount': 1,
            'totalPrice': price
        }, {
            where: {
                id
            }
        }
    )
}

const clearCart = async (filter) => {
    await Cart.destroy({where: filter})
}

const clearCartProduct = async (filter) => {
    await CartProduct.destroy({
            where: filter,
        },
    )


}

module.exports = {
    createCart,
    getCart,
    createCartDetail,
    cartExistByUserID,
    cartProductExistByUserID,
    increaseCartProductCountPrice,
    increaseCartPriceCount,
    findCartProduct,
    removeFromCartProduct,
    decreaseCartProductCountPrice,
    decreaseCartPriceCount,
    findAllCartProducts,
    clearCart,
    clearCartProduct
}