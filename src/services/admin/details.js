const {Ram, OpSystem, Storage, ProductSpecial, Special} = require('../../models');

const createRam = async (data) => {
    return await Ram.create(data);
}

const updateRam = async (data, filter) => {
    return  Ram.update(data, {where: filter});
}

const createOpSystem = async (data) => {
    return await OpSystem.create(data);
}

const updateOpSystem = async (data, filter) => {
    return  OpSystem.update(data, {where: filter});
}
const createStorage = async (data) => {
    return await Storage.create(data);
}

const updateStorage = async (data, filter) => {
    return  Storage.update(data, {where: filter});
}
const createProductSpecial = async (data) => {
    return await ProductSpecial.create(data);
}

const updateProductSpecial = async (data, filter) => {
    return  ProductSpecial.update(data, {where: filter});
}
const createSpecial = async (data) => {
    return await Special.create(data);
}

const updateSpecial = async (data, filter) => {
    return  Special.update(data, {where: filter});
}
module.exports = {
    createSpecial,
    createRam,
    createOpSystem,
    createProductSpecial,
    createStorage,
    updateSpecial,
    updateRam,
    updateStorage,
    updateOpSystem,
    updateProductSpecial
}
