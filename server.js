const express = require('express')
const app = express()
const moment = require('moment');

//if there is no query, there should just be the homepage
app.route('/').get(function(req, res) {
      res.sendFile(process.cwd() + '/index.html');
});

// return 10 latest results    
app.get('/:query', function (req, res) {
  var string = req.params.query;
  var time = moment();
  res.send({
    "term" : string,
    "when" : time
  })
  //TBD: send this info to latestsearch page
  /*if (string === 'latestsearch'){
      res.sendFile(process.cwd() + '/latestsearch.html');    
  }*/
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});