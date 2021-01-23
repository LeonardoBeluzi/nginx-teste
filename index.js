const express = require('express')

const server = express()


server.get('/', (req, res, next) => {
    res.send('hello')
})

server.listen('8000', () => {
    console.log('listening on 8000')
})