const Transform = require('../index');
const {priceFormatter} = require("../../utils/utils");
const {productTransform} = require('../product/product.transform');

const getReceiptsTransform = (receipts) => {
    return {
        pages: receipts.pages,
        total: receipts.total,
        docs:receipts?.docs && receipts.docs.map((receipt) => {
            return receiptTransform(receipt)
        }),
    }
}

const receiptDetailsTransform = (receiptDetails) => {
    return receiptDetails && receiptDetails.map((receiptDetail) => {
        return {
            id: receiptDetail.id,
            sumPrice: receiptDetail.sumPrice,
            productCount: receiptDetail.productCount,
            ProductId: receiptDetail.ProductId,
            Product: receiptDetail.Product ? productTransform(receiptDetail.Product) : 'no-product'
        }
    })
}

const receiptTransform = (receipt) => {
    return {
        id: receipt.id,
        TransactionId: receipt.TransactionId,
        totalPrice: receipt.totalPrice,
        totalPriceFormat: receipt.totalPrice ? priceFormatter(receipt.totalPrice) : 'ناموجود',
        allProductsCount: receipt.allProductsCount,
        paymentType: receipt.paymentType,
        paymentStatus: receipt.paymentStatus,
        ReceiptDetails: receipt.ReceiptDetails ? receiptDetailsTransform(receipt.ReceiptDetails) : 'no-detail'
    }
}


module.exports = {
    getReceiptsTransform,
    receiptTransform
}