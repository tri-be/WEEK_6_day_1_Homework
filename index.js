const express = require('express')
const customerRouter = require('./customers/router')
const productRouter = require('./products/router')
const PORT = 8000

let app = express()

app.use('/customers', customerRouter)
app.use('/products', productRouter)

app.listen(PORT)