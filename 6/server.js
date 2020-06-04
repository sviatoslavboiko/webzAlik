const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const db = require('./db')(config);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  age: { type: Number, required: true, max: 6 },
  name: { type: String, required: true, max: 50 },
  salary: { type: Number, required: true, max: 50 }
});

const app = express()

app.use('/deleteUser', function (req, res ){
  if(req.body.id){
    mongoose.model('UserTypeSchema', User).findByIdAndDelete(req.body.id, function (err, deletedUser) {
      if (err) {
        res.status(404).send('problems').end();
      } else {
        res.send('deleteUser').end()
      }
    })
  } else {
    res.status(404).end();
  }
});


app.listen(config.port, config.host, () => {
  console.log(`Server running at http://${config.host}:${config.port}/`)
});
