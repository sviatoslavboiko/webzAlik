const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const db = require('./db')(config);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationTypeSchema = new Schema({
  code: { type: String, required: true, unique: true, max: 6 },
  name: { type: String, required: true, unique: true, max: 50 }
});

const app = express()

app.use('/deleteUser', function (req, res ){
  if(req.body.id){
    mongoose.model('LocationType', locationTypeSchema).findByIdAndDelete(req.body.id, function (err, deletedLocationType) {
      if (err) {
        reject(err)
        res.status(404).send('problems').end();

      } else {
        resolve(deletedLocationType)
        res.send('deleteUser').end()
      }
    })
  } else {
    res.status(404).end();
  }

})


app.listen(config.port, config.host, () => {
  console.log(`Server running at http://${config.host}:${config.port}/`)
})
