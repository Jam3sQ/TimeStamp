var express = require('express'); 
var app = express(); 
var moment = require("moment"); 

app.get('/', function(req,res){
  res.send("Hello World!");
})

//Unix
app.get('/:id', function (req, res) {
  var object = {
    'unix': Number(req.params.id),
    'natural': moment.unix(Number(req.params.id)).format('MMMM Do YYYY')
  }
  res.send(JSON.stringify(object)); 
}); 

//Natural Language
app.get('/:id', function (req, res){
    var object = {
      'natural': req.params.id
    }
    res.send(JSON.stringify(object)); 
}); 

app.listen(8080); 