const Router = require('@koa/router')
const {
  getIndex,
  getEditDetail,
  getOne,
  deleteOne,
  editDetail,
  getAdd,
  addDetail
} = require('./service')

const router = new Router()

router
  .get('/index', getIndex)
  .get('/editOne', getEditDetail)
  .get('/getOne', getOne)
  .get('/deleteOne', deleteOne)
  .get('/add', getAdd)
  .post('/editDetail', editDetail)
  .post('/addDetail', addDetail)

module.exports = router