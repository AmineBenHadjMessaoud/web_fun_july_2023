const Product = require('../models/products.model')

module.exports = {
    createProduct: (req, res) => { 
        Product.create(req.body) 
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },
    findAllProducts : (req,res) =>{
        Product.find({})
        .then((allProducts)=> res.json(allProducts))
        .catch((err)=>console.log(err));
    },
    findOneProduct : (req,res)=>{
        Product.findOne({_id : req.params._id})
        .then((oneProduct)=>res.json(oneProduct))
        .catch((err)=>console.log(err))
    }
};