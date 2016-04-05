var http = require('http');
var server = http.createServer(function(req, res){
  debugger;
  res.end('Test');
});

server.listen(8012, function(){

  debugger;
});


