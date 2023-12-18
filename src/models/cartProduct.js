'use strict';
const sequelizePaginate = require('sequelize-paginate')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CartProduct extends Model {
        static associate(models) {
            CartProduct.belongsTo(models.Product, {onUpdate: 'cascade', onDelete: 'cascade'});
            CartProduct.belongsTo(models.Cart, {onUpdate: 'cascade', onDelete: 'cascade'});

        }
    }

    CartProduct.init({
        sumPrice: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        productCount: {
            type: DataTypes.TINYINT,
            defaultValue: 1
        },


    }, {
        sequelize,
        modelName: 'CartProduct',
    });
    sequelizePaginate.paginate(CartProduct)
    return CartProduct;
};