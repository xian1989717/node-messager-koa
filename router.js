const Router = require('@koa/router')
const {
  getIndex,
  getEditDetail,
  getOne
} = require('./service')

const router = new Router()

router
  .get('/index', getIndex)
  .get('/editOne', getEditDetail)
  .get('/getOne', getOne)

module.exports = router