var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(15000, function(){
    console.log('Server running on 15000...');
});