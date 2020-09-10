const Router = require('@koa/router')
const {
  getIndex
} = require('./service')

const router = new Router()

router
  .get('/index', getIndex)

module.exports = router