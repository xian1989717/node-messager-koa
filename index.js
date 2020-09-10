const Koa = require('koa')
const router = require('./router')
const views = require('koa-views')
const path = require('path')

const app = new Koa()
// 添加模板引擎
app.use(views(path.join(__dirname, './public/view'), { extension: 'ejs' }));
// 添加路由
app.use(router.routes(), router.allowedMethods())

app.listen(5050, () => {
  console.log('server is running 5050!')
})