const {Transaction} = require('../../models');
const { Op } = require("sequelize");

const createTransaction = async (data) => {
    return await Transaction.create(data)
}

const updateTransaction = async (data, filter) => {
    return await Transaction.update(data, {where: filter});
}

const findTransactions = (filter, page=1) => Transaction.findAll(
    {
        where: filter,
        offset:((page-1)*10),
        limit : 10,
    },

);

const findTransactionsPaginate = (filter, page=1) => Transaction.paginate(
    {
        where: filter,
        page,
        paginate: 10,
        order: [['updatedAt', 'DESC']]

    },
);


const findTransactionById = (id) => Transaction.findOne({where: {id}});

const duplicateTransaction = (filter) => Transaction.findOne({where: {
        [Op.or]: filter
    }})


module.exports = {
    createTransaction,
    updateTransaction,
    findTransactions,
    findTransactionById,
    duplicateTransaction,
    findTransactionsPaginate,
}