const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors(),express.json(),express.urlencoded({extended: true}))

require('./config/mongoose.config')

const ProductsRoutes = require("./routes/products.routes")

ProductsRoutes(app);

app.listen(8000,() => console.log('the server is fired up on port 8000'))
