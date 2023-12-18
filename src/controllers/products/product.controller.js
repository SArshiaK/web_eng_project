const productService = require('../../services/product/product.service');
const {getAllProductsTransform, getProductsPaginateTransform, productTransform} = require("../../transform/product/product.transform");
const {createOrders} = require("../../utils/utils");

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
        const order = req.query.sort ? createOrders(req.query.sort) :  ['createdAt', 'ASC'];
        const products = await productService.getProductPaginate(req.query.page, req.query.search, order);
        console.log(products.pages)

        res.status(200).json({
            success: true,
            message: 'اطلاعات تمام محصولات ارسال شد',
            data: getProductsPaginateTransform(products)
        })

    }catch (e) {
        console.log(e)
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

const getProductsPaginateByFilters = async (req, res) => {
    try {
        const order = req.query.sort ? createOrders(req.query.sort) :  ['createdAt', 'ASC'];
        let {simNum, hasSD, brandId, priceRange} = req.body;

        const products = await productService.getProductPaginateByFilters({
            page: req.query.page ? req.query.page : 1,
            search: req.query.search ? req.query.search : '',
            order: order ? order : ['createdAt', 'ASC'],
            simNum: simNum ,
            sdCard: hasSD ,
            brandId: brandId ,
            priceRange: priceRange
        });

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

const getProductById = async (req, res) => {
    try {
        const product = await productService.findProduct({id: req.params.id});

        console.log(!product)

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
    getAllProducts,
    getProductsPaginate,
    getProductById,
    getProductsPaginateByFilters
}