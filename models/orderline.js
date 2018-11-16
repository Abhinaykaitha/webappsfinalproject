/**
 * @author: Harish Reddy Vavilala
 */
const mongoose = require('mongoose')
const orderLineSchema = new mongoose.Schema({
  _id: { type: Number, required: true },

  lineNumber: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true, 
    default: 1
  }
})
module.exports = mongoose.model('orderLine', orderLineSchema)