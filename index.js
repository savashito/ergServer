// var app = require('express')(); // require('express').createServer();
// var io = require('socket.io')(app);

// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server,port=8000);


// app.listen(8000);

// // app.get('/', function (req, res) {
// //   res.sendfile(__dirname + '/index.html');
// // });

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('bbb', function (data) {
//     console.log(data);
//   });
// });

// var app = require('express')();
// var http = require('http').Server(app);

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
/*
// server
require('net').createServer(function (socket) {
    console.log("connected");

    socket.on('data', function (data) {
        console.log(data.toString());
    });
})

.listen(8080);

// client
var s = require('net').Socket();
s.connect(8080);
s.emit({'a':3});
s.end();
*/

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var clientsIds= {};
var currentUsers = [];
io.on('connection', function (socket) {

  socket.emit('boop',{'data':'meow','Muerte':'bark'})

  // console.log("python connected")
  socket.emit('clientGretting', { hello: 'world' });
  socket.on('clientId',function(data){

  	console.log('got client id '+ data)
    if(clientsIds[data]===undefined)
      currentUsers.push(socket);

  	clientsIds[data] = socket; 

  	// currentUser = socket;

  });
  /*
  socket.on('bbb',function(data){
  	console.log(data);
  });
*/
  socket.on('ergData', function (data) {

    console.log(data);
    console.log(currentUsers.length);
    for (var i = 0;i<currentUsers.length;i++){
      var currentUser = currentUsers[i];
      currentUser.emit('news', data);
    }
    // currentUser.
  });
});

