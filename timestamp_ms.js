var express = require('express');
var app = express();


app.use(express.static('public') );

app.get('/',function(req,res){
  res.sendFile('index.html');
});


app.get('/:TIME', function(req, res){
    var input = req.params.TIME;
    var date;
    if( isNaN(input) ){
        date = new Date(req.params.TIME);
    } else {
        date = new Date();
        date.setTime(input);
    }
    
    var result = { 
        "unix": date.getTime(),
        "natural": date.toDateString() === 'Invalid Date'?null:date.toDateString()
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
});

var port = process.env.PORT || 8080;
app.listen(port);