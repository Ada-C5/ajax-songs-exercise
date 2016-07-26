let request = require('request')
let apiToken = '2yjFYtHPAdsc1mnDIsTSalKMp'
let baseURL = 'https://opendata.socrata.com/resource/ed74-c6ni.json?$order=:id'

module.exports = {
  getSongs: function(queryOptions, callback) {
    console.log("options: ", queryOptions)
    let limit = queryOptions.size || 25
    let offset = queryOptions.page
      ? (queryOptions.page - 1) * limit
      : 0

    let requestOptions = {
      method: 'GET',
      url: baseURL + '&$limit=' + limit + '&$offset=' + offset,
      headers: {
        'Accept': 'application/json',
        'X-App-Token': apiToken
      }
    }

    request(requestOptions, callback)
  }
}
