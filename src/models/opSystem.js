'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OpSystem extends Model {
        static associate(models) {
            OpSystem.hasMany(models.Product);
        }
    }

    OpSystem.init({
        version:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type:{
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'OpSystem',
    });
    return OpSystem;
};