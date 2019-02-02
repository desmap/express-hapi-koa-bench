const express = require('express')
const Hapi = require('hapi')
const Koa = require('koa')

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
