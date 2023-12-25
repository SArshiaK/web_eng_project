const Transform = require('../index');
const {priceFormatter} = require("../../utils/utils");

const transactionTransform = (transaction) => {
    return {
        id: transaction.id,
        amount: transaction.amount,
        amountFormat: transaction.amount ? priceFormatter(transaction.amount) : 'ناموجود',
        status: transaction.status,
        statusMessage: transaction.statusMessage,
        track_id: transaction.track_id,
        payment_id: transaction.payment_id,
    }
}


module.exports = {
    transactionTransform
}