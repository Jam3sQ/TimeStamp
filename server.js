var express = require('express'); 
var app = express(); 
var moment = require("moment"); 

app.get('/', function(req,res){
  res.send("TimeStamp App!");
})

app.get('/:id', function (req, res) {
  
  if ( moment.unix(Number(req.params.id)).isValid() ){
      // //Unix
      var object = {
        'unix': Number(req.params.id),
        'natural': moment.unix(Number(req.params.id)).format('MMMM Do YYYY')
      }
  }

  else if (((moment(decodeURIComponent(req.params.id)).format('X')) !== "Invalid date") === true ){
      // //Natural Language 
      var object = {
        'unix': moment(decodeURIComponent(req.params.id)).format('X'),
        'natural': decodeURIComponent(req.params.id)
      }
  }
  else{
    var object = {
      "unix": null, 
      'natural': null
    }
  }
  res.send(JSON.stringify(object)); 
}); 

app.listen(8080); 