/** 
*  Customer model
*  Customer schema to store all customer related details.
*
*  @author Abhinay Kaitha<s534051@nwmissouri.edu>
*
*/

// bring in mongoose 
// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')
const CustomerSchema = new mongoose.Schema({
_id: { 
    type: Number,
    required: true,
},
customerFirstName: {
    type: String,
    required: true,
    default: 'FirstName'
},
customerMiddleName: {
    type: String,
    required: false,
    default: 'MiddleName'
},
customerLastName: {
    type: String,
    required: true,
    default: 'LastName'
},
customerAge: {
    type: Number,
    required: false,
    default: 22,
},
phoneNumber: {
    type: Number,
    required: true,
    default: 9999999999,
},
Street: {
    type: String,
    required: true,
    default: 'String'
},
city: {
    type: String,
    required: true,
    default: 'City'
},
state: {
    type: String,
    required: true,
    default: 'State'
},
country: {
    type: String,
    required: true,
    default: 'Country'
},
})
module.exports = mongoose.model('Customer', CustomerSchema)