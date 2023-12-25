const cartService = require('../../services/Cart/cart.service');
const transactionService = require('../../services/payment/transaction.service');
const receiptService = require('../../services/payment/receipt.service');
const productService = require('../../services/product/product.service');
const {payRequest} = require('../../lib/axios.request');
const {userProfileTransform} = require("../../transform/user/user.transform");
const {TRANSACTION_STATUS} = require('../../static/index');
const {getReceiptsTransform} = require("../../transform/payment/receipt.transform");

async function createOptions(body, url) {
    let options = {
        method: 'POST',
        url: `https://api.idpay.ir/v1.1/${url}`,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': process.env.X_API_KEY,
            'X-SANDBOX': 1,
        },
        json: true,
    };

    options.data = body;
    return options;
}

const startPayment = async (req, res) => {
    try {
        const cart = await cartService.getCart({UserId: req.User.id});
        if (!cart || cart.totalPrice <= 0 || cart.allProductsCount <= 0) {
            return res.status(400).json({
                success: false,
                message: 'سبد خرید شما خالی است'
            })
        }

        const transaction = await transactionService.createTransaction({
            UserId: req.User.id,
            amount: cart.totalPrice,
            type: 'CART'
        })

        const options = await createOptions({
            order_id: transaction.id,
            amount: cart.totalPrice,
            phone: req.User.phoneNumber,
            // callback: `http://${process.env.SERVER_ADDRESS}:${process.env.PORT}/api/v1/payment/verifyPayment?userId=${req.User.id}`
            callback: `${process.env.SERVER_ADDRESS}/api/v1/payment/verifyPayment?userId=${req.User.id}`
        }, 'payment');

        const result = await payRequest(options);
        if (result.data.error_code) throw new Error(result.data.error_message);
        const {id, link} = result.data;
        await transactionService.updateTransaction({payment_id: id}, {id: transaction.id});
        res.status(201).json({
            success: true,
            message: 'عملیات با موفقیت انجام شد',
            data: link
        })

    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

const verifyPayment = async (req, res) => {
    try {
        const {track_id, status, order_id, id} = req.query;

        const duplicateTransaction = await transactionService.findTransactions({track_id, payment_id: id})
        if(duplicateTransaction.length > 0)
            throw new Error("درخواست قبلا انجام شده است")
        await transactionService.updateTransaction({track_id, status, statusMessage: TRANSACTION_STATUS[status]}, {id: order_id});
        if(status != 10)
            throw new Error(TRANSACTION_STATUS[status])

        const options = await createOptions({id, order_id}, 'payment/verify');
        let {data, verifyStatus} = await payRequest(options);

        const transaction =  await transactionService.findTransactionById(order_id);
        await transactionService.updateTransaction({status: verifyStatus, statusMessage: TRANSACTION_STATUS[verifyStatus]}, {id: order_id});

        if(verifyStatus == 200){
            // TODO: User Transaction here
            // await userService.increaseBalance(transaction.UserId, transaction.amount);
            const cart = await cartService.getCart({UserId: req.query.userId});
            const cartProducts = await cartService.findAllCartProducts({CartId: cart.id});

            const receiptProducts = [];
            console.log('CART PRODUCT COUNT', cart.allProductCount )
            const receipt = await receiptService.createReceipt({
                totalPrice: cart.totalPrice,
                allProductCount: cart.allProductCount,
                TransactionId: transaction.id,
                UserId: req.query.userId,
                paymentStatus: 'PAYED'
            })
            console.log('RECEIPT PRODUCT COUNT', receipt.allProductCount )

            cartProducts.map(async (cartProduct) => {
                receiptProducts.push({
                    sumPrice: cartProduct.sumPrice,
                    productCount: cartProduct.productCount,
                    ReceiptId: receipt.id,
                    ProductId: cartProduct.ProductId,
                })
                // TODO: Decrease product stock
                await productService.decreaseProductStock(cartProduct.ProductId, cartProduct.productCount);
                // TODO: Increase product sold count
                await productService.increaseProductSoldCount(cartProduct.ProductId, cartProduct.productCount);
            })
            const receiptDetails = await receiptService.bulkCreateReceiptDetail(receiptProducts);

            // TODO: clear cart
            await cartService.clearCart({id: cart.id });
            // TODO: clear cart detail
            await cartService.clearCartProduct({CartId: cart.id})

            return res.render('body', {
                type: 'success',
                refId: track_id,
                isWeb: 'false'
            });
        }

        throw new Error('تایید پرداخت امکان پذیر نیست')

    } catch (e) {
        return res.render('body', {
            type: 'error',
            errorMessage: e.message,
            isWeb: req.query.isWeb
        });
    }
}

const getOrderHistory = async (req, res) => {
    try {
        const receiptDetails = await receiptService.getReceipt({UserId: req.User.id}, req.query.page ? req.query.page : 1 )
        res.status(201).json({
            success: true,
            message: 'عملیات با موفقیت انجام شد',
            data: getReceiptsTransform(receiptDetails)
        })

    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

module.exports = {
    startPayment,
    verifyPayment,
    getOrderHistory
}