const detailsService = require('../../../services/admin/details');

const createDetail = async (req, res) => {
    try {
        if(!req.query?.model){
            throw 'نام مدل را در query وارد کنید'
        }
        const detail = await detailsService.createDetail(req.query.model, req.body);
        res.status(201).json({success: true, message: 'جزییات با موفقیت اضافه شد', data:  detail})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}


const updateDetail = async (req, res) => {
    try {
        if(!req.query?.model){
            throw 'نام مدل را در query وارد کنید'
        }
        const detail = await detailsService.updateDetail(req.query.model, req.body, {id: req.params.id});
        res.status(201).json({success: true, message: 'جزییات با موفقیت ویرایش شد', data:  detail})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const deleteDetail = async (req, res) => {
    try {
        if(!req.query?.model){
            throw 'نام مدل را در query وارد کنید'
        }
        const detail = await detailsService.deleteDetail(req.query.model, {id: req.params.id});
        res.status(201).json({success: true, message: 'جزییات با موفقیت حذف شد', data:  detail})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}

const getAllDetails = async (req, res) => {
    try {
        if(!req.query?.model){
            throw 'نام مدل را در query وارد کنید'
        }
        const details = await detailsService.getAllDetail(req.query.model);
        res.status(201).json({success: true, message: 'جزییات با موفقیت حذف شد', data:  details})
    }catch (e) {
        res.status(400).json({success: false, message: e})
    }
}



module.exports = {
    createDetail,
    updateDetail,
    deleteDetail,
    getAllDetails
}