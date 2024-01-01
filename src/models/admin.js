'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        static associate(models) {
        }
    }

    Admin.init({
        userName:{
            type: DataTypes.STRING,
            unique: true,
        },
        password:{
            type: DataTypes.STRING,

        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        sequelize,
        modelName: 'Admin',
    });
    return Admin;
};