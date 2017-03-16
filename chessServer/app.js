var http = require('http'),
    express = require('express'),
    io = require('socket.io');


var app = express();
var server = http.createServer(app);
io = io.listen(server);


var chessDesk = require('./modules/chessDesk');

io.on('connection', function(socket) {
    console.log("user connected");

    socket.on('getAllFigures', function() {
        var allFigures = chessDesk.getFigures();
        socket.emit('serverAllFigures', allFigures);
    });
    socket.on('getDesk', function() {
        var desk = chessDesk.getDesk();
        socket.emit('serverDesk', desk);
    });
});


app.get('/', function (req, res) {
    console.log('---Index page request');
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));
server.listen(3065, function(){
    console.log('+++++ chessServer was started +++++');
});