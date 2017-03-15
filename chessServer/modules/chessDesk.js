var figures = [
    {name : 'P', position: 'a2'},
    {name : 'P', position: 'b2'},
    {name : 'P', position: 'c2'}
];

var startDesk = require('nconf');

startDesk.argv()
    .env()
    .file({ file: __dirname + '/../config/startDesk.json' });
var desk = startDesk.get('desk');

exports.getFigures = function() {
    return figures;
};
exports.getDesk = function() {
    return desk;
};