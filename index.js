var thunkify = require('thunkify')
var fetch = require('./lib/fetch')

function Nei(opts) {
  opts = opts || {}

  return function* nei(next) {
    opts = Object.assign(opts, {
      path: this.path,
      method: this.method
    })

    var response = yield thunkify(fetch)(opts)

    this.status = response.code
    this.body = response.code === 200 ? JSON.parse(response.body).result.json : response.body

    yield next
  }
}

module.exports = Nei