const express = require('express')
const app = express() //method
// const port = process.env.PORT || 3600 
//router link
const web = require('./routes/web.js')

const fileupload = require("express-fileupload")
const cloudinary = require('cloudinary');
app.use(fileupload({ useTempFiles: true }));

const session = require('express-session')
const flash = require('connect-flash')

const cookieParser = require('cookie-parser')
app.use(cookieParser())
// body parser require
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const dotenv = require('dotenv')
dotenv.config({path:'.env'})

//messages
app.use(session({
    secret:'secret',
    cookie:{maxAge:60000},
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

// load router
app.use('/',web);

//database connection
const connectDB = require('./db/connectdb')
connectDB()


//set ejs template engine 
app.set('view engine','ejs')


// static files css and image
app.use(express.static('public'))


app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})