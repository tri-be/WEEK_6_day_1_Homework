const express = require('express')
const model = require('./model')
let router = express.Router()

// create request route to GET full list of customers
router.get('/', (request, response) => {
	let customers = model.getCustomers()
	response.send(customers);
})

// create request route to GET specific customer
router.get('/:index', (request, response) => {
	let customer = model.getBird(request.params.index)
	response.send(customer)
})

module.exports = router