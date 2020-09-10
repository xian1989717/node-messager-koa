module.exports = {
  async getIndex (ctx) {
    const lists = [
      {
        Mno: 1
      },
      {
        Mno: 2
      }
    ]
    await ctx.render('index', { list: lists })
  }
}