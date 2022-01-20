const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product')
const methodOverride = require('method-override')
const app = express()
const productsRouter = require('./routes/products')
require('dotenv').config()
//Connect MONGODB
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true})


//set-up views
app.set('view engine', 'ejs')
//Use resources
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//Initialize routes
app.use('/products', productsRouter)
//Renders the main page and reads the database
app.get('/', async (req,res) =>{

    const products = await Product.find()
    res.render('products/index', {products:products})

})
//Listen to the PORT in config.env
app.listen(process.env.PORT)