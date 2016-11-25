var express = require('express'); 
var app = express(); 
var moment = require("moment"); 

app.use(express.static('public')); 

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
        'unix': Number(moment(decodeURIComponent(req.params.id)).format('X')) ,
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

app.listen(process.env.PORT || 8080); 