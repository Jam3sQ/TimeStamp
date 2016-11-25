var express = require('express'); 
var app = express(); 
var moment = require("moment"); 

app.use(express.static('public')); 

app.get('/:datestring', function (req, res) {
  
  if (moment.unix(Number(req.params.datestring)).isValid() ){
      // //Unix
      var object = {
        'unix': Number(req.params.datestring),
        'natural': moment.unix(Number(req.params.datestring)).format('MMMM Do YYYY')
      }
  }

  else if (((moment(decodeURIComponent(req.params.datestring)).format('X')) !== "Invalid date") === true ){
      // //Natural Language 
      var object = {
        'unix': Number(moment(decodeURIComponent(req.params.datestring)).format('X')) ,
        'natural': decodeURIComponent(req.params.datestring)
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