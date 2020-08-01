const express = require('express');
const cors = require('cors');

const app = express ();

app.use(express.json());
app.use(cors());

require('./config/mongoose.config')

const productRoutes = require('./routes/product.routes');
productRoutes(app);

app.listen(8002, () => console.log('listening now'));

