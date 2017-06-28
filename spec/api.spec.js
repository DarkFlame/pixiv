let expect = require("chai").expect
let axios = require('axios')
let util = require('util')
const apiurl = "http://localhost:9988/api/"
describe('api',function () {
  it("illustBookmarkDetail",function (done) {
    let url = apiurl + 'illustBookmarkDetail/61140121'
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


  it("userDetail",function (done) {
    let url = apiurl + 'userDetail/24185171'
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

  it("userIllusts",function (done) {
    let url = apiurl + 'userIllusts/24185171'
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


  it("illustRelated",function (done) {
    let url = apiurl + 'illustRelated/63056687'
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
  it("downloadImgById",function (done) {
    let url = apiurl + 'download/63056687'
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

