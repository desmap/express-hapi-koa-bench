const express = require('express')
const Hapi = require('hapi')
const http = require('http')
const micro = require('micro')
const Koa = require('koa')
const polka = require('polka')

/**
 * Express
 */

const expressApp = express()

expressApp.get('/', (req, res) => res.send('Hello World!'))
expressApp.listen(4001)

/**
 * Hapi
 */

const server = Hapi.server({ port: 4002 })

server.route({
  method: 'GET',
  path: '/',
  handler: (req, h) => 'Hello World'
})
server.start()

/**
 * Koa
 */

const koaApp = new Koa()

koaApp.use(ctx => {
  ctx.body = 'Hello World!'
})
koaApp.listen(4003)

/**
 * micro
 */

micro(async (req, res) => 'Hello world').listen(4006)

/**
 * node native
 */

http.createServer(function (req, res) {
  res.end('Hello World!')
}).listen(4005)

/**
 * Polka
 */

polka()
  .get('/', (req, res) => {
    res.end('Hello World!')
  })
  .listen(4004, err => {
    if (err) throw err
  })
