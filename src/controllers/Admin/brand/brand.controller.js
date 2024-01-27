const brandService = require('../../../services/brand/brand.service');
const createBrand = async (req, res) => {
    try {
        const brand = await brandService.createBrand(req.body);

        res.status(201).json({
            success: true,
            message: 'برند با موفقیت ایجاد شد',
            data:  brand
        })

    }catch (e) {
        console.log(e.message)
        res.status(400).json({
            success: false,
            message: e
        })
    }
}

const updateBrand = async (req, res) => {
    try {
        const brand = await brandService.updateBrand(req.body, {id: req.params.id});

        res.status(201).json({
            success: true,
            message: 'برند با موفقیت ویرایش شد',
            data:  brand
        })

    }catch (e) {
        console.log(e.message)
        res.status(400).json({
            success: false,
            message: e
        })
    }
}

module.exports = {
    createBrand,
    updateBrand
}