const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const path = require('path')

const router = require('./router')

const app = new Koa()
// 静态资源
app.use(static(path.join(__dirname, "./public")))
// 添加模板引擎
app.use(views(path.join(__dirname, './public/view'), { extension: 'ejs' }));
// 添加路由
app.use(router.routes(), router.allowedMethods())

app.listen(5050, () => {
  console.log('server is running 5050!')
})