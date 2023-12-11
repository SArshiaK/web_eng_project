'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Brand extends Model {
        static associate(models) {
            // Brand.hasOne(models.Customer);
            Brand.hasMany(models.Product);
        }
    }

    Brand.init({
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Brand',
    });
    return Brand;
};