const express = require('express')
const Product = require('./../models/product')
const router =express.Router()

router.get('/add', (req, res) =>{
    res.render('products/add' ,{product: new Product()})
})

router.get('/:id', async (req,res) =>{
    const product = await Product.findById(req.params.id)

    if(product == null) res.redirect('/')
    res.render('products/show', {product : product})

})

router.post('/', async (req, res, ) => {    
    let product = new Product({
        name: req.body.name,
        supplied: req.body.supplied,
        quantity: req.body.quantity
    })
    try{
        product =await product.save()
        res.redirect('/products/' + product.id)
    }catch (e) {
        res.render('products/add', {product:product})
    }
    
})

module.exports = router