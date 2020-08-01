const productCtl = require('../controllers/products.controller')

module.exports = app => {
    app.get('/api/products', productCtl.getAll)
    app.post('/api/products', productCtl.create)
    app.get('/api/products/:id', productCtl.getOne)
    app.put('/api/products/:id', productCtl.update)
    app.delete('/api/products/:id', productCtl.delete)

}