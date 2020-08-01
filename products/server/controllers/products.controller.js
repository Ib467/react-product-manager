const Product = require('../models/Product.model')
const { model } = require('mongoose')

//get all products
module.exports.getAll = (req, res) => {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.json(err));
}

//create a new product
module.exports.create = (req, res) =>{
    Product.create(req.body)
      .then(product => res.json(product))
    //   .catch(err => res.json(err))
      .catch((err) => {
        res.status(400).json(err);
      });
}

//get one product 
module.exports.getOne = (req, res) => {
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(err => res.json(err))
}

//update a product 
module.exports.update = (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then(product => res.json(product))
        // .catch(err => res.json(err))
        .catch((err) => {
            res.status(400).json(err);
          });      
}

//delete a product 
module.exports.delete = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then(() => req.json({message: "Success"}))
      .catch(err => res.json(err))
}
