const brandService = require('../../services/brand/brand.service');
const {cartTransform} = require("../../transform/cart/cart.transform");

const getAllBrands = async (req, res) => {
    try {
        const brands = await brandService.getAllBrands();
        res.status(200).json({
            success: true,
            message: 'اطلاعات تمام برند ها ارسال شد',
            data: brands
        })
    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

module.exports = {
    getAllBrands
}