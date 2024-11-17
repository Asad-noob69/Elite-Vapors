const express = require('express');
const productHandler = require('./product.js');

const app = express();
const port = 3000;

app.use('/api/product', productHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});