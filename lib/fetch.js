var request = require('request')
var neiAPI = 'https://nei.netease.com/api/mockdata'

module.exports = function(opts, cb) {
  var requestOptions = {
    url: neiAPI + '?path=' + opts.path + '&type=3&key=' + opts.key + '&method=' + opts.method,
    method: opts.method,
    timeout: 10 * 1000
  }

  request(requestOptions, function(error, response, body) {
    if (error) {
      cb(error)
    } else {
      cb(null, {
        code: response.statusCode,
        body: body
      })
    }
  })
}