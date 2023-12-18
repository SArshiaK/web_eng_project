'use strict';
const sequelizePaginate = require('sequelize-paginate')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ReceiptDetail extends Model {
        static associate(models) {
            ReceiptDetail.belongsTo(models.Product, {onUpdate: 'cascade', onDelete: 'cascade'});
            ReceiptDetail.belongsTo(models.Receipt, {onUpdate: 'cascade', onDelete: 'cascade'});

        }
    }

    ReceiptDetail.init({
        sumPrice: {
            type: DataTypes.INTEGER,
        },
        productCount: {
            type: DataTypes.TINYINT,
            defaultValue: 1
        },


    }, {
        sequelize,
        modelName: 'ReceiptDetail',
    });
    sequelizePaginate.paginate(ReceiptDetail)
    return ReceiptDetail;
};