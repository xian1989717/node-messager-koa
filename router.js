const Router = require('@koa/router')
const {
  getIndex,
  getEditDetail,
  getOne,
  deleteOne,
  editDetail
} = require('./service')

const router = new Router()

router
  .get('/index', getIndex)
  .get('/editOne', getEditDetail)
  .get('/getOne', getOne)
  .get('/deleteOne', deleteOne)
  .post('/editDetail', editDetail)

module.exports = router