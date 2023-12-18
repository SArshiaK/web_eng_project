'use strict';
const sequelizePaginate = require('sequelize-paginate')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.User, {onUpdate: 'cascade', onDelete: 'cascade'});
            Cart.hasMany(models.CartProduct);

        }
    }

    Cart.init({
        totalPrice: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        allProductsCount: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        orderStatus: {
            type:   DataTypes.ENUM,
            values: ['PREPARING', 'SENDING', 'SENT', 'CANCELED', 'WAITING']
            // defaultValue: 'WAITING'
        }

    }, {
        sequelize,
        modelName: 'Cart',
    });
    sequelizePaginate.paginate(Cart)
    return Cart;
};