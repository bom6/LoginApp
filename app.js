var express = require ('express');
var path = require ('path');
var cookieParser = require ('cookie-parser');
var bodyParser = require('body-parser');
var exphbs =  require('express-handlebars');
var expressValidator =  require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

//creating routes
var routes = require('./routes/index');
var users = require('./routes/users');

//initialise app
var app = express();

//Setup view engine
app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

//Passport initialization
app.use(passport.initialize());
app.use(passport.session());

//Express validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value){
        var namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;
        
    while(namespace.length){
        formParam == '['+ namespace.shift() + ']';
    }
    return {
        param: formParam,
        msg: msg,
        value: value
    };
    }
}));


//connect flash middleware
app.use(flash());

//Set up global variables
app.use(function(req,res,next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.use('/', routes);
app.use('/users', users);


//set the port
app.set('port', (process.env.Port || 3000 ));
app.listen(app.get('port'), function(){
    console.log('Server started on port: '+app.get('port'));
});

