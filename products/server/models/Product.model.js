const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'Please enter Title!'],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],

    },
    price: {
        type: Number,
        required: [true, 'Please provide price'],
        min: [0, "{PATH} must have a minimum value of {MIN}."],
        
    },
    description:{
        type: String,
        required: [true, 'Please enter description']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema)