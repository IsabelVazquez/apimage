const express = require('express');
const app = express();
const moment = require('moment');

app.get('/', function (req, res) {
  res.send({
    'when': 'UnixTimestamp' 
  })
});