const detailsService = require('../../../services/admin/details');

const createRam = async (req, res) => {
    try {
        const ram = await detailsService.createRam(req.body);
        res.status(201).json({success: true, message: 'رم با موفقیت اضافه شد', data:  ram})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const createOpSystem = async (req, res) => {
    try {
        const opSystem = await detailsService.createOpSystem(req.body);
        res.status(201).json({success: true, message: 'سیستم عامل با موفقیت اضافه شد', data:  opSystem})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const createStorage = async (req, res) => {
    try {
        const storage = await detailsService.createStorage(req.body);
        res.status(201).json({success: true, message: 'فضای ذخیره سازی با موفقیت اضافه شد', data:  storage})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const createSpecial = async (req, res) => {
    try {
        const special = await detailsService.createSpecial(req.body);
        res.status(201).json({success: true, message: 'ویژگی خاص با موفقیت اضافه شد', data:  special})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const createProductSpecial = async (req, res) => {
    try {
        const productSpecial = await detailsService.createProductSpecial(req.body);
        res.status(201).json({success: true, message: 'ویژگی خاص محصول با موفقیت اضافه شد', data:  productSpecial})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const updateRam = async (req, res) => {
    try {
        const ram = await detailsService.updateRam(req.body, {id: req.params.id});
        res.status(201).json({success: true, message: 'رم با موفقیت ویرایش شد', data:  ram})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const updateOpSystem = async (req, res) => {
    try {
        const opSystem = await detailsService.updateOpSystem(req.body, {id: req.params.id});
        res.status(201).json({success: true, message: 'سیستم عامل با موفقیت ویرایش شد', data:  opSystem})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const updateStorage = async (req, res) => {
    try {
        const storage = await detailsService.updateStorage(req.body, {id: req.params.id});
        res.status(201).json({success: true, message: 'فضای ذخیره سازی با موفقیت ویرایش شد', data:  storage})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const updateSpecial = async (req, res) => {
    try {
        const special = await detailsService.updateSpecial(req.body, {id: req.params.id});
        res.status(201).json({success: true, message: 'ویژگی خاص با موفقیت ویرایش شد', data:  special})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const updateProductSpecial = async (req, res) => {
    try {
        const productSpecial = await detailsService.updateProductSpecial(req.body, {id: req.params.id});
        res.status(201).json({success: true, message: 'ویژگی خاص محصول با موفقیت ویرایش شد', data:  productSpecial})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

module.exports = {
    createSpecial,
    createStorage,
    createRam,
    createOpSystem,
    createProductSpecial,
    updateSpecial,
    updateStorage,
    updateRam,
    updateOpSystem,
    updateProductSpecial,

}