var express = require('express'); 
var app = express(); 
var moment = require("moment"); 

app.get('/', function(req,res){
  res.send("TimeStamp App!");
})



app.get('/:id', function (req, res) {
  
  //Unix
  // var object = {
  //   'unix': Number(req.params.id),
  //   'natural': moment.unix(Number(req.params.id)).format('MMMM Do YYYY')
  // }
  
  //Natural Language 
    var object = {
      'unix': moment(decodeURIComponent(req.params.id)).format('X'),
      'natural': decodeURIComponent(req.params.id)
    }
  
  res.send(JSON.stringify(object)); 
}); 

app.listen(8080); 