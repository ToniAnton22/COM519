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
//Masks the id header using slug
router.get('/:slug', async (req,res) =>{
    const product = await Product.findOne({slug: req.params.slug})

    if(product == null) res.redirect('/')
    res.render('products/show', {product : product})

})
//Create method
router.post('/', async (req, res, next) => {    

    req.product = new Product()
    next()
    
}, saveArticleAndRedirect('add'))
//Edit method
router.put('/:id',async (req, res, next) => {    

    req.product = await Product.findById(req.params.id)
    next()
    
}, saveArticleAndRedirect('add'))

function saveArticleAndRedirect(path){
    return async(req,res) =>{
        
        let product = req.product
        product.name = req.body.name,
        product.supplied = req.body.supplied,
        product.quantity = req.body.quantity,
        product.supplier = req.body.supplier,
        product.shelves = req.body.shelves,
        product.status = req.body.status
    
        try{
            product =await product.save()
            res.redirect('/products/' + product.slug)
        }catch (e) {
            res.render('products/'+path, {product:product})
        }
        
    }
}
// Delete method
router.delete('/:id', async (req,res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router