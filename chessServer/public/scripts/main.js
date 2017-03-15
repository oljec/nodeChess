console.log('main.js script is connected');

var socket = io("http://localhost:3065");

$(document).ready(function (){
    socket.emit('getAllFigures');
    socket.emit('getDesk');

    socket.on('serverAllFigures',function(allFigures){
        console.log(allFigures);
    });
    socket.on('serverDesk',function(desk){
        console.log(desk);

        //draw desk
        var deskDraw = '';
        for (var i=0; i<8; i++) {
            for (var j=0; j<8; j++) {
                deskDraw += '<div id="cell_'+ i + '_' + j + '" class="deskCell';
                if (desk[i][j]==1) {
                    deskDraw += ' white';
                }
                if (desk[i][j]==2) {
                    deskDraw += ' black';
                }
                deskDraw += '">' + desk[i][j] + '</div>';
            }
        }
        deskDraw += '<div class="cleaner"></div>';
        $('.chessBoard').html(deskDraw);
    });
});