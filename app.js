const express = require('express')
const http = require('http')
const expressLayouts = require('express-ejs-layouts')
const favicon = require('serve-favicon')
const path = require('path')
const bodyParser = require('body-parser')
const engines = require('consolidate')
const session = require('express-session')
const errorHandler = require('errorhandler')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const expressStatusMonitor = require('express-status-monitor')
const LOG = require('./utils/logger.js')
//const logfile = '/access.log'
const app = express()  // make express app
const port = process.env.PORT  || 8081
const fs = require('fs')

// Load environment variables from .env file, where API keys and passwords are configured.
// dotenv.load({ path: '.env.example' })
dotenv.load({ path: '.env' })
LOG.info('Environment variables loaded.')
//const app = express()

app.set('views', path.resolve(__dirname, 'views')) // path to views
app.set('view engine', 'ejs') // specifies our view engine


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(expressLayouts)
app.use(errorHandler()) // load error handler


app.get("/", function (req, res) {
    res.render("index.ejs")
   })
  
   app.get("/index", function (req, res) {
    //res.sendFile(path.join(__dirname + '/assets/index.html'))
    res.render("index.ejs")
   })
  
   app.get("/products", function (req, res) {
    res.render("product.ejs")
   })
  

//app.use((req, res) => { res.status(404).render('404.ejs') }) // handle page not found errors

// initialize data ............................................
require('./utils/seeder.js')(app)  // load seed data

// start Express app
app.listen(port, () => {
  console.log('App is running at http://localhost: ', port)
  console.log('  Press CTRL-C to stop\n')
})


