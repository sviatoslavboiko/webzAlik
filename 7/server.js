const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const db = require('./db')(config);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  model: { type: String, required: true, unique: false, max: 6 },
  name: { type: String, required: true, unique: false, max: 50 },
  price: { type: Number, required: true, unique: false, max: 50 }

});
const productModel = mongoose.model('products', productSchema);

for (let i = 0; i < 10 ; i++ ){
  let prod = new productModel({
    name: 'name' + i,
    model: 'model' + i,
    price:i
  })
  prod.save()
}

const app = express()

app.use('/get_data', function (req, res ){
  productModel.find({})
    .exec(function (err, products) {
      if (err) {
        res.json({erorr: err})
      } else {
        console.log(products)
        res.json(products)
      }
    })
})


app.listen(config.port, config.host, () => {
  console.log(`Server running at http://${config.host}:${config.port}/`)
})
