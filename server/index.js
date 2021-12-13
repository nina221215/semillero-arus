'use strict'
const PORT = process.env.PORT || 6000
const express = require('express')
const debug = require('debug')('semillero:api')
const app = express()
const userApi = require('./routes/user')

app.use(express.json())
app.use(userApi)

app.listen(PORT, () => {
    debug(`Service is running up on port ${PORT}`)
})

