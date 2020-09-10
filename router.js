const Router = require('@koa/router')
const {
  getIndex
} = require('./service')

const router = new Router()

router
  .get('/', getIndex)

module.exports = router