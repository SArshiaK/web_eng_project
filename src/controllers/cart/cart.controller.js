const cartService = require('../../services/Cart/cart.service');
const productService = require('../../services/product/product.service');
const {userProfileTransform} = require("../../transform/user/user.transform");
const {cartTransform} = require("../../transform/cart/cart.transform");

const addToCart = async (req, res) => {
    try {
        let cart = await cartService.cartExistByUserID(req.User.id);
        if(!cart)
            cart = await cartService.createCart({UserId: req.User.id, orderStatus: "WAITING"});

        const product = await productService.findProduct({id: req.body.ProductId});
        if(!product){
            res.status(404).json({
                success: false,
                message: 'محصول یافت نشد'
            })
        }

        if(await cartService.cartProductExistByUserID(cart.id, req.body.ProductId)){
            await cartService.increaseCartProductCountPrice(cart.id, req.body.ProductId, product.price)
        }
        else {
            await cartService.createCartDetail({CartId: cart.id, ProductId: req.body.ProductId, sumPrice: product.price});
        }

        await cartService.increaseCartPriceCount(cart.id, product.price)

        cart = await cartService.getCart({id: cart.id});

        res.status(201).json({
            success: true,
            message: 'محصول مورد نظر به سبد خرید اضافه شد',
            data: cart
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


const getCart = async (req, res) => {
    try {
        const cart = await cartService.getCart({UserId: req.User.id});

        res.status(201).json({
            success: true,
            message: 'محصول مورد نظر به سبد خرید اضافه شد',
            data: cartTransform(cart)
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

module.exports = {
    addToCart,
    getCart
}