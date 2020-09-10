const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '182.92.170.202',
  user: 'test',
  password: 'test@db_mysql',
  database: 'test'
})

connection.connect()

const query = (sql, datas) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = {
  connection,
  query
}