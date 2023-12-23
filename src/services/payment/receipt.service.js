const {Receipt, ReceiptDetail} = require('../../models');

const createReceipt = async (data) => {
    return await Receipt.create(data);
}

const bulkCreateReceiptDetail = async (data) => {
    return await ReceiptDetail.bulkCreate(data);
}

module.exports = {
    createReceipt,
    bulkCreateReceiptDetail
}