
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

// Manage top-level request first
router.get('/', (req, res, next) => {
  LOG.debug('Request to /')
  res.render('index.ejs', { title: 'Express App' })
})
  
router.get("/customer", function (req, res) {

  res.render("customer/index.ejs")
 });

 router.get("/orderLine", function (req, res) {

  res.render("orderLine/index.ejs")
 });
 
// Defer path requests to a Product controller
router.use('/product', require('../controllers/product.js'))

//  Defer path requests to a order line controller
router.use('/orderLine', require('../controllers/orderLine.js'))
router.use('/order', require('../controllers/order.js'))

router.use("/customer", require("../controllers/customer.js"));

LOG.debug('Routing end.');
module.exports = router