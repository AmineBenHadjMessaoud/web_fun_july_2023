const ProductController = require('../controllers/products.controller')

module.exports = app =>{
    app.post('/api/products',ProductController.createProduct)
    app.get('/api/products',ProductController.findAllProducts)
    app.get('/api/products/:_id', ProductController.findOneProduct)
} 