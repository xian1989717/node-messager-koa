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
  }
}