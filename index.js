const express = require('express');
var expressLayouts = require('express-ejs-layouts');
var methodOverride = require('method-override');
const app = express()
const morgan = require('morgan');
const db = require('./config/db');



// connect db
db.connect();


const port = 3000

const route = require('./routes')// goi route

// cau hinh EJS

app.set("view engine", "ejs"); //set view engine cho node js
app.set("views", "./views"); // set thu muc view cho project
app.use(expressLayouts);
app.set('layout','./layouts/full-width');

app.use(methodOverride('_method'))// method override
app.use(morgan('combined')) // debug
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/image'));
//su ly form post midlewear// bodypaser cho post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})