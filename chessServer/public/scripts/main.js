console.log('main.js script is connected');

var socket = io("http://localhost:3065");

socket.on('serverAllFigures',function(allFigures){
    console.log(allFigures);
    //draw figures
    if (allFigures.length>0) {
        allFigures.forEach(function(item){
            var cellHtml = $('.chessBoard #cell_'+item.line+'_'+item.row);
            cellHtml.html('<div class="figure '+
                item.type + ' ' +
                item.side +
                '"></div>');
        });
    }

    //hang handler on figures
    var figuresHtml = $('.chessBoard .figure');

    figuresHtml.click(function() {
        figuresHtml.removeClass('selected');
        $(this).addClass('selected');

        //show possible ways to move depending on class/color figure + situation on desk
    });

    figuresHtml.mouseenter(function (e) {
        $(this).addClass('active');
    }).mouseleave(function () {
        $(this).removeClass('active');
    });
    //-----------------------
});
socket.on('serverDesk',function(desk){
    console.log(desk);
});

$(document).ready(function (){
    //draw empty desk
    var deskDraw = '';
    for (var i=0; i<8; i++) {
        for (var j=0; j<8; j++) {
            deskDraw += '<div id="cell_'+ i + '_' + j + '" class="deskCell"></div>';
        }
    }
    deskDraw += '<div class="cleaner"></div>';
    $('.chessBoard').html(deskDraw);


    socket.emit('getAllFigures');
    socket.emit('getDesk');
});