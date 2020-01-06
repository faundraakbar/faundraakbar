var http = require('http');
var dt = require('./module.js');
var sd = require('./module2.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>'+dt.asd+'</h1>');
  res.write('<h2>'+dt.contoh()+'</h2>');
  res.write('<br>');
  res.write('2 + 3 = '+dt.tambah(2, 3));

  res.write('<h1>'+sd.sss+'</h1>');
  res.write('<h2>'+sd.contoh2()+'</h2>');
  res.write('<br>');
  res.write('20 - 10 = '+sd.kurang(20, 10));
  res.end();

}).listen(8080);