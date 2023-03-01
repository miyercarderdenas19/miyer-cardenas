const http =require("http");
const datetime =require("./date.js");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(datetime.myDateTime());
}).listen(8080);

// npm init -yes para que sirva el http