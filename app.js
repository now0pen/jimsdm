// nodemon ./bin/www to run app

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTING
app.get('/cinema', function(req, res) {
    res.render('cinema', {
        title: 'Generate Traffic, Get Customers To Sign Up For Membership' });
});

app.get('/oct18seo', function(req, res) {
    res.render('oct18seo', {
        title: 'Get Top Spot with Good Copywriting?' });
});

app.get('/timeline', function(req, res) {
    res.render('timeline', {
        title: 'Timeline: Jim Syyap Direct Marketing' });
});

app.get('/contact', function(req, res) {
    res.render('contact', {
        title: 'Jim Syyap Direct Marketing'});
});

app.get('/about', function(req, res) {
    res.render ('about', {
        title: 'Jim Syyap Direct Marketing' });
});

app.get('/adhesion', function(req, res) {
    res.render('adhesion', {
        title: 'Adwords Example: Adwords + Auckland' });
});

/*
app.get('/mediatemp', function(req, res) {
    res.render('mediatemp', { 
        title: "How to Use Effective User Interface plus Persuasive Copywriting to Get Ahead of the Competition" });
});
*/

app.get('/', function(req, res) {
    res.render('index', { title: "Direct Marketing @ convertMost.com" });
});

app.get('/toc', function(req, res) {
    res.render('toc', { title: 'Terms and Conditions' });
});

app.get('/usedcardealer', function(req, res) {
    res.render('usedcardealer', { 
        title: 'Marketing Campaign For Used Car Dealers' });
});

//app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
