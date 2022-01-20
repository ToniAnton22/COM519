const mongoose = require('mongoose')
const slugify = require('slugify')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    supplied: {
        type: Date,
        default: Date.now

    },
    quantity: {
        type: Number,
        required: true

    },
    supplier: {
        type: String,
        required: true
    },
    shelves: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        require:true,
        unique: true
    }

})

productSchema.pre('validate',function(next){

    if(this.name) {
        this.slug = slugify(this.name, {lower: true, strict:true})

    }
    next()
})

module.exports = mongoose.model('Product', productSchema)