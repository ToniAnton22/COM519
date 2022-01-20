const express = require('express')
const Product = require('./../models/product')
const router =express.Router()

router.get('/add', (req, res) =>{
    res.render('products/add' ,{product: new Product()})
})

router.get('/edit/:id', async (req, res) =>{
    const product = await Product.findById(req.params.id)
    res.render('products/edit' ,{product: product})
})

router.get('/:id', async (req,res) =>{
    const product = await Product.findById(req.params.id)

    if(product == null) res.redirect('/')
    res.render('products/show', {product : product})

})

router.post('/', async (req, res, next) => {    

    req.product = new Product()
    next()
    
}, saveArticleAndRedirect('add'))

router.put('/:id',async (req, res, next) => {    

    req.product = await Product.findById(req.params.id)
    next()
    
}, saveArticleAndRedirect('add'))

function saveArticleAndRedirect(path){
    return async(req,res) =>{
        
        let product = req.product
        product.name = req.body.name,
        product.supplied = req.body.supplied,
        product.quantity = req.body.quantity
        
        try{
            product =await product.save()
            res.redirect('/products/' + product.id)
        }catch (e) {
            res.render('products/'+path, {product:product})
        }
        
    }
}

router.delete('/:id', async (req,res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router