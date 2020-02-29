var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req, res){
    var u=url.parse(req.url, true);
    var fileName = u.pathname
    fs.readFile("./" +fileName, function(err, data){
            if(err){
                res.writeHeader(400, { 'contentType': 'text/html' });
                return res.end('Erreur 404 file note found!');
            }
                res.writeHeader(200, { 'contentType': 'text/html' });
                res.write(data);
                return res.end();
        });
}).listen(8080);