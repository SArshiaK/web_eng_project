'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductSpecial extends Model {
        static associate(models) {
            ProductSpecial.belongsTo(models.Product, {onUpdate: 'cascade', onDelete: 'cascade'});
            ProductSpecial.belongsTo(models.Special, {onUpdate: 'cascade', onDelete: 'cascade'});
        }
    }

    ProductSpecial.init({

    }, {
        sequelize,
        modelName: 'ProductSpecial',
    });
    return ProductSpecial;
};