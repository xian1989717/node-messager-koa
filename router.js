const Router = require('@koa/router')
const {
  getIndex,
  editDetail
} = require('./service')

const router = new Router()

router
  .get('/index', getIndex)
  .get('/editOne', editDetail)

module.exports = router