'use strict';
const sequelizePaginate = require('sequelize-paginate')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Receipt extends Model {
        static associate(models) {
            Receipt.belongsTo(models.User, {onUpdate: 'cascade', onDelete: 'cascade'});
            Receipt.belongsTo(models.Transaction, {onUpdate: 'cascade', onDelete: 'cascade'});
            Receipt.hasMany(models.ReceiptDetail);
        }
    }

    Receipt.init({
        totalPrice: {
            type: DataTypes.INTEGER,
        },
        allProductsCount: {
            type: DataTypes.TINYINT,
            defaultValue: 1
        },
        paymentType: {
            type: DataTypes.ENUM('CARD', 'CASH'),
            defaultValue: 'CARD'
        },
        paymentStatus: {
            type: DataTypes.ENUM('PAYED', 'RETURNED', 'CANCELED'),
        }

    }, {
        sequelize,
        modelName: 'Receipt',
    });
    sequelizePaginate.paginate(Receipt)
    return Receipt;
};