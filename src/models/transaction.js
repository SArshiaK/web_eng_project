'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        static associate(models) {
            Transaction.belongsTo(models.User, {onDelete: 'cascade', onUpdate: 'cascade'});
            Transaction.hasOne(models.Receipt);
            // Transaction.belongsTo(models.Order, {foreignKey: 'UserId', onDelete: 'cascade', onUpdate: 'cascade'});
        }
    }
    Transaction.init({
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status:  {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 0
        },
        statusMessage: {
            type: DataTypes.STRING,
            defaultValue: 'انتظار'
        },
        track_id: {
            type: DataTypes.INTEGER,
            unique: true
        },
        payment_id: {
            type: DataTypes.STRING,
            unique: true
        },

    }, {
        sequelize,
        modelName: 'Transaction',
    });
    return Transaction;
};