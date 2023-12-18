const {Cart, CartProduct, Product, Brand, Ram, OpSystem, Storage, ProductSpecial, Special} = require('../../models')

const createCart = async(data) => {
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
    console.log('PRICE', price)
    await CartProduct.increment({
        'productCount': 1,
        'sumPrice': price
    },{
        where: {
            CartId,
            ProductId
        }}
    )
}

const increaseCartPriceCount = async (id, price) => {
    await Cart.increment({
            'allProductsCount': 1,
            'totalPrice': price
        },{
            where: {
                id
            }}
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
                },{
                    model: OpSystem,
                    attributes: ['version', 'type']
                }, {
                    model: Storage,
                    attributes: ['size']
                },{
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

module.exports = {
    createCart,
    getCart,
    createCartDetail,
    cartExistByUserID,
    cartProductExistByUserID,
    increaseCartProductCountPrice,
    increaseCartPriceCount
}