const Product = require('../models/products.model')

module.exports = {
    createProduct: (req, res) => { 
        Product.create(req.body) 
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    }
};