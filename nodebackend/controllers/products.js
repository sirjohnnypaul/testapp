const Product = require('../models/product');


module.exports = {
    index: async (req, res, next) => {
        const products = await Product.find({});
        res.status(200).json(products);
    },

    newProduct: async (req, res, next) => {
        console.log(req.value)
        const newProduct = req.value.body;
        const product = new Product(newProduct);

        await product.save();
        res.status(200).json(product);
    },


    getProductById: async (req, res, next) => {
        const product = await Product.findById(req.value.params.productId);
        res.status(200).json(product);
    },

    replaceProduct: async (req, res, next) => {
        //Using validation so we tradtitionally use value
        const {productId} = req.value.params;
        const newProduct = req.value.body;

        const result = await Product.findByIdAndUpdate(productId,newProduct);
        res.status(200).json({success:true});

    },

    updateProduct: async (req, res, next) => {
        //Using validation so we tradtitionally use value
        const {productId} = req.value.params;
        const newProduct = req.value.body;
        
        const result = await Product.findByIdAndUpdate(productId,newProduct);
        res.status(200).json({success:true});
    },

    deleteProduct: async (req, res, next) => {
        //Using validation so we tradtitionally use value
        const {productId} = req.value.params;
        //get car
        const product = await Product.findById(productId);
        if(!product) {
            return res.status(404).json({error:'Product does not exist'});
        }
        await product.remove();
        await product.save()

        res.status(200).json({success: true});
    }
}