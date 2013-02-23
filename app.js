
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

console.log(process.env.MONGODB_URI);

app.configure('development', function(){
    app.set('db-uri', process.env.MONGODB_URI);
    app.use(express.errorHandler());
});

var db = mongoose.connect(app.set('db-uri'));
var projects = require('./controllers/project');

app.get('/', routes.index);

app.get( '/projects',       projects.index);
app.get( '/projects/:id',   projects.show);
app.post('/projects',       projects.create);
app.put( '/projects/:id',   projects.update);
app.del( '/projects/:id',   projects.destroy);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
