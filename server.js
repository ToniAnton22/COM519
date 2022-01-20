const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product')
const methodOverride = require('method-override')
const app = express()
const productsRouter = require('./routes/products')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true})



app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use('/products', productsRouter)

app.get('/', async (req,res) =>{

    const products = await Product.find()
    res.render('products/index', {products:products})

})

app.listen(8080)