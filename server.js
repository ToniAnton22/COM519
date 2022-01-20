const express = require('express');
const app = express();
const productsRouter = require('./routes/products')

app.set('view engine', 'ejs')

app.use('/products', productsRouter)

app.get('/', (req,res) =>{

    const products = [{
        title: "test",
        supplied: new Date(),
        quantity: "2"
    }]
    res.render('products/index', {products:products})

})

app.listen(8080)