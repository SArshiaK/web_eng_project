const {Receipt, ReceiptDetail, Product, Cart, CartProduct, Brand, Ram, OpSystem, Storage, ProductSpecial, Special} = require('../../models');

const createReceipt = async (data) => {
    console.log('CREATING RECEIPT DATA', data)
    return await Receipt.create(data);
}

const bulkCreateReceiptDetail = async (data) => {
    return await ReceiptDetail.bulkCreate(data);
}

const getReceipt = async (filter, page) => {
    return await Receipt.paginate({
        page,
        paginate: 10,
        where: filter,
        order: [['updatedAt', 'DESC']],
        include: {
            model: ReceiptDetail,
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
                },
                    {
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

const getReceiptDetails = async (filter) => {
    return await ReceiptDetail.findAll({
        where: filter,
        include: [
            {
                model: Product
            },
            {
                model: Receipt
            }
        ]
    })
}

module.exports = {
    createReceipt,
    bulkCreateReceiptDetail,
    getReceiptDetails,
    getReceipt
}