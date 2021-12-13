'use strict'

const express = require('express')
const users = {}
const debug = require('debug')('semillero:user-api')
const api = express.Router()

api.get('/user', (req,res) => {
    res.send({users})
})

api.get('/user/:id', (req,res) => {
    const { id } = req.params
    res.send({user: users[id]})
})

api.post('/user', (req,res) => {
    const { body } = req
    const id =  Math.ceil((Math.random() * 1000000))
    users[id] = {
        ...{ id },
        ...body
    }
    res.send({user: users[id]})
})

module.exports = api