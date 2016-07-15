var superagent = require('superagent');
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(80);
console.log('sudo node app => 80');
