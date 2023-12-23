'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // User.hasOne(models.Customer);
            User.hasMany(models.Transaction)
        }
    }

    User.init({
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
        modelName: 'User',
    });
    return User;
};