const productService = require('../../../services/product/product.service');
const path = require("path");
const fs = require('fs')

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



module.exports = {
    createProduct
}