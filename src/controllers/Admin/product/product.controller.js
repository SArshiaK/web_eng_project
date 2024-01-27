const productService = require('../../../services/product/product.service');
const path = require("path");
const fs = require('fs')
const {getAllProductsTransform, productTransform} = require("../../../transform/product/product.transform");

const createProduct = async (req, res) => {
    try {
        if(req.body?.base64){
            const filename = `${Date.now()}.${req.body?.imgFormat ? req.body.imgFormat : 'png'}`;

            const base64Data = req.body?.base64.replace(/^data:image\/png;base64,/, '');

            const filePath = path.join(__dirname, `../../../../src/public/products/uploads/${filename}`);

            fs.writeFileSync(filePath, base64Data, 'base64');

            req.body.placeHolderImg = `uploads/${filename}`

        }

        const product = await productService.createProduct(req.body);

        res.status(201).json({
            success: true,
            message: 'محصول با موفقیت ایجاد شد',
            data:  product
        })

    }catch (e) {
        console.log(e.message)
        res.status(400).json({
            success: false,
            message: e
        })
    }
}

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

const getProductById = async (req, res) => {
    try {
        const product = await productService.findProduct({id: req.params.id});

        if(!product){
            return res.status(404).json({
                success: false,
                message: 'محصولی با این شناسه یافت نشد'
            })
        }

        res.status(200).json({
            success: true,
            message: 'اطلاعات محصول ارسال شد',
            data: productTransform(product)
        })

    }catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById
}