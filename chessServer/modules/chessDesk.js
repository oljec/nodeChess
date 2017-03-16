var startDesk = require('nconf');

startDesk.argv()
    .env()
    .file({ file: __dirname + '/../config/startDesk.json' });

var desk,
    figures;


this.Init = function() {
    desk = startDesk.get('desk');
    figures = startDesk.get('figures');
};

this.Init();

exports.getFigures = function() {
    return figures;
};
exports.getDesk = function() {
    return desk;
};