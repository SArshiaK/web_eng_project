'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Storage extends Model {
        static associate(models) {
            Storage.hasMany(models.Product);
        }
    }

    Storage.init({
        size:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Storage',
    });
    return Storage;
};