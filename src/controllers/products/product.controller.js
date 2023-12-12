const productService = require('../../services/product/product.service');
const {getAllProductsTransform, getProductsPaginateTransform} = require("../../transform/product/product.transform");

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();

        res.status(200).json({
            success: true,
            message: 'اطلاعات تمام محصولات ارسال شد',
            data:  getAllProductsTransform(products)
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

const getProductsPaginate = async (req, res) => {
    try {
        const products = await productService.getProductPaginate(req.query.page);

        res.status(200).json({
            success: true,
            message: 'اطلاعات تمام محصولات ارسال شد',
            data: getProductsPaginateTransform(products)
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

module.exports = {
    getAllProducts,
    getProductsPaginate
}