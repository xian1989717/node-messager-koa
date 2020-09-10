module.exports = {
  async getIndex (ctx) {
    await ctx.render('index')
  }
}