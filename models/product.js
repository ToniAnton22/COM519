const mongoose = require('mongoose')

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

    }

})

module.exports = mongoose.model('Product', productSchema)