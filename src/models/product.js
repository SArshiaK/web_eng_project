'use strict';
const sequelizePaginate = require('sequelize-paginate')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.Brand,{onUpdate: 'cascade', onDelete: 'cascade'});
            Product.belongsTo(models.Ram,{onUpdate: 'cascade', onDelete: 'cascade'});
            Product.belongsTo(models.Storage,{onUpdate: 'cascade', onDelete: 'cascade'});
            Product.belongsTo(models.OpSystem,{onUpdate: 'cascade', onDelete: 'cascade'});
            Product.hasMany(models.ProductSpecial);
        }
    }

    Product.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
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
    sequelizePaginate.paginate(Product)
    return Product;
};