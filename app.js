
/**
 * Module dependencies.
 */

var express = require('express'),
    GrandCentral = require('grand-central-express'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express(),
    gce = new GrandCentral(app, __dirname);

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

app.configure('development', function(){
    //app.set('db-uri', process.env.MONGODB_URI);
    app.set('db-uri', 'mongodb://localhost/test');
    app.use(express.errorHandler());
});

var db = mongoose.connect(app.set('db-uri'));

gce.route();

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
