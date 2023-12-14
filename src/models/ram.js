'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ram extends Model {
        static associate(models) {
            Ram.hasMany(models.Product);
        }
    }

    Ram.init({
        size:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Ram',
    });
    return Ram;
};