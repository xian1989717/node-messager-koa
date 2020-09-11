const fs = require('fs')
const formidable = require('formidable')
const { connection, query } = require('./mysql.config')

module.exports = {
  async getIndex (ctx) {
    const sql = `
      select
        Mno,
        Mname,
        Msex,
        Mage,
        Mhobby,
        Mimg
      from 
        node_messager
      where is_removed = 0
    `
    const res = await query(sql)
    await ctx.render('index', { list: res })
  },
  async getEditDetail (ctx) {
    const sql = `
      select
        Mno,
        Mname,
        Msex,
        Mage,
        Mhobby,
        Mimg
      from
        node_messager
      where
        Mno = ${ctx.query.id}
      and is_removed = 0
    `
    const res = await query(sql)
    await ctx.render('edit', { data: res[0] })
  },
  async getOne (ctx) {
    const sql = `
      select
        Mno,
        Mname,
        Msex,
        Mage,
        Mhobby,
        Mimg
      from
        node_messager
      where
        Mno = ${ctx.query.id}
      and is_removed = 0
    `
    const res = await query(sql)
    await ctx.render('detail', { data: res[0] })
  },
  async editDetail (ctx) {
    const { id } = ctx.query
    const form = new formidable.IncomingForm()
    form.uploadDir = 'public/imgs/'
    await new Promise((resolve, reject) => {
      form.parse(ctx.req, async (err, fields, files) => {
        if (err) {
          reject(err)
          return
        }
        const { Mname, Msex, Mage, Mhobby } = fields
        const { name, path } = files.img
        let sql
        if (name) {
          fs.renameSync(path, './public/imgs/' + name)
          sql = `
            update
              node_messager
            set
              Mname = '${Mname}',
              Msex = '${Msex}',
              Mage = '${Mage}',
              Mhobby = '${Mhobby}',
              Mimg = 'imgs/${name}'
            where
              Mno = ${id}
          `
        } else {
          sql = `
            update
              node_messager
            set
              Mname = '${Mname}',
              Msex = '${Msex}',
              Mage = '${Mage}',
              Mhobby = '${Mhobby}'
            where
              Mno = ${id}
          `
        }
        const res = await query(sql)
        if (res) {
          ctx.response.type = 'html'
          ctx.response.body = '<script>alert("保存成功！");window.location.href="/index"</script>'
          resolve()
        }
      })
    })
  },
  async deleteOne (ctx) {
    const { id } = ctx.query
    const sql = `
      update
        node_messager
      set
        is_removed = 1
      where
        Mno = ${id}
    `
    const res = await query(sql)
    if (res) {
      ctx.response.type = 'html'
      ctx.response.body = '<script>alert("删除成功！");window.location.href="/index"</script>'
    }
  }
}
