
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const mysql = require("mysql");
var session = require('express-session');
const app = express();

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//MySql connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ensiasoverflow'
});

//Connect data base
conn.connect((err)=>{
  if(err)
  {
    console.log("Erreur de Connection ",err);
  }
  else 
  {
    console.log("MySql Connected ...");
  }
  });

app.use(express.static ('public'));
app.set('css', express.static(__dirname + 'public/css'));
app.set('img', express.static(__dirname + 'public/img'));
app.set('js', express.static(__dirname + 'public/js'));
app.set('fonts', express.static(__dirname + 'public/fonts'));

//Define Routes
app.use('/Login' , require('./Routes/Login'));
app.use('/Acceuil' , require('./Routes/Acceuil'));
app.use('/Utilisateurs' , require('./Routes/Utilisateurs'));
app.use('/Posts' , require('./Routes/Posts'));
app.use('/Fichiers' , require('./Routes/Fichiers'));

//middleware configuration
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/Views/Admin' );

app.get('/',function(req,res){
  res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\Login');
});

//Define session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

module.exports = app;