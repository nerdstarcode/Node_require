var http = require('http');

http.createServer(function(req,res){
  res.end("Hello there!");
}).listen(8081);

console.log("Servidor rodando!");
