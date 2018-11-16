/**
 * Order Module
 * Order schema to store the order details by using mongoose 
 * @author Divyaharshini, Bheemireddy
 */
const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({

_id:{
    type: Number,
    required: true
},
orderDate:{
    type: Date,
    required: true,
    default: Date.now
},
paymentType: {
    type: String,
    enum: ['credit card', 'cash', 'check'],
    required: true,
    default: 'cash'
  },
_customerId:{
    type: Number,
    required: true
},
totalAmount: {
    type: Number,
    required: true,
    default:0.0
  }
})
module.exports = mongoose.model('orders', orderSchema)