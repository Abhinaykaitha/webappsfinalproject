/**
 * @author: Harish Reddy Vavilala
 */


const express = require('express')
const api = express.Router()
const Model = require('../models/orderline.js')
const LOG = require('../utils/logger.js')
const find = require('lodash.find')
const remove = require('lodash.remove')
const notfoundstring = 'orderlines'

api.get('/', (req, res) => {
	res.render('orderline/index.ejs');
})

api.get('/create', (req, res) => {
	// TODO
	res.render('orderline/create.ejs');
})

api.get('/delete/:id', (req, res) => {
	// TODO
	res.render('orderline/delete.ejs');
})

api.get('/edit/:id', (req, res) => {
	// TODO
	res.render('orderline/edit.ejs');
})

api.get('/details/:id', (req, res) => {
	// TODO
	res.render('orderline/details.ejs');
})


module.exports = api