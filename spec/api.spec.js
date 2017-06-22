let expect = require("chai").expect
let axios = require('axios')
let util = require('util')
const apiurl = "http://localhost:9988/api/"
describe('export get',function () {
  it("first",function (done) {
    let url = apiurl + 'illustBookmarkDetail/123'
    let postBody = {
      url: url,
      method: "get",
      json: true,
      forever: true,
      timeout: 6000,
      pool: {
        maxSockets: 10
      },
      time: true
    }
    axios(postBody).then(({data,status,statusText}) => {
      console.log(util.inspect(data,true,null,true))
      expect(status).to.equals(200)
      expect(statusText).to.equals('OK')
      done()
    })

  })
})

