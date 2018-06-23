var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');

app.use(cors());

// viewed at http://localhost:8080


app.use(express.static(__dirname));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(8080);

console.log('Template running on port 8080');
