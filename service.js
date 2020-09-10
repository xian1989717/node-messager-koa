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
  }
}