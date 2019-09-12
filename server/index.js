var express = require('express');
var app = express();
var port = 3000;
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.use('/', express.static('public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.get('/comments/:artist/:song', (req, res) => {
//   request(`http://ec2-54-245-205-70.us-west-2.compute.amazonaws.com:3002/comments/${req.params.artist}/${req.params.song}`).pipe(res)
// });

app.listen(port, () => { console.log(`Proxy is listening on port ${port}`) });