
/**
 * @author:Dristi Marasini
 */

const express = require('express');
const LOG = require('../utils/logger.js');

LOG.debug('Routing Started');

const router = express.Router();

// ----------- Top-Level requests -----------------

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
//var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
//app.use(logger('dev'));
//app.use(logger('combined', { stream: accessLogStream }));

router.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
 })

 router.get("/index", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
 })

 router.get("/products", function (req, res) {
  res.render("products.ejs")
 })


// Defer path requests to a Product controller
router.use('/product', require('../controllers/product.js'))

LOG.debug('Routing end.');
module.exports = router