var express = require('express'); 

var app = express()

app.get('/', function(req,res){
  res.send("Hello World!");
})

//Unix
app.get('/:id', function (req, res) {
  var object = {
    'unix': req.params.id
  }
  res.send(JSON.stringify(object)); 
}); 

app.listen(8080); 