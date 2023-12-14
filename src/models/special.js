'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Special extends Model {
        static associate(models) {
            Special.hasMany(models.ProductSpecial);
        }
    }

    Special.init({
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: 'Special',
    });
    return Special;
};