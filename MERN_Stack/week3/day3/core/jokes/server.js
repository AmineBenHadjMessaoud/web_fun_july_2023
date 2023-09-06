const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.port
require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({extended: true}))

const AllJokesRoutes = require ("./routes/jokes.routes")

AllJokesRoutes(app)

app.listen(PORT, ()=> console.log(`the server is running on port ${PORT}`))

