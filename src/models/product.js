'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            // Product.hasOne(models.Customer);
            Product.belongsTo(models.Brand);
        }
    }

    Product.init({
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,

        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0

        },
        placeHolderImg: {
            type: DataTypes.STRING
        },
        soldCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        hot: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};