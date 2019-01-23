const express = require('express')
const model = require('./model')
let router = express.Router()

// create request route to GET full list of products
router.get('/', (request, response) => {
	let products = model.getProducts()
	response.send(products);
})

// create request route to GET specific product
router.get('/:index', (request, response) => {
	let product = model.getProduct(request.params.index)
	response.send(product)
})

module.exports = router