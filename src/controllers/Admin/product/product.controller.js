const productService = require('../../../services/product/product.service');

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json({
            success: true,
            message: 'محصول با موفقیت ایجاد شد',
            data:  product
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e
        })
    }
}

module.exports = {
    createProduct
}