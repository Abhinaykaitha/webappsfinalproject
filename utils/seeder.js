const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const products = require('../data/product.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  db.products = new Datastore()
  db.products.loadDatabase()

  // insert the sample data into our data store
  db.products.insert(products)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.products = db.products.find(products)
  LOG.debug(`${app.locals.products.query.length} products seeded`)

  //creating order datastore
 // db.orders = new Datastore()
  //db.orders.loadDatabase()

  // insert the sample data into our data store
  //db.orders.insert(orders)

  // initialize app.locals (these objects will be available to our controllers)
  //app.locals.orders = db.orders.find(orders)
  //LOG.debug(`${app.locals.orders.query.length} orders seeded`)
  
  LOG.info('END Seeder. Sample data read and verified.')
}