let expect = require("chai").expect
let axios = require('axios')
let util = require('util')
const apiurl = "http://localhost:9988/api/"
describe('export get',function () {
  it("first",function (done) {
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
  it('test',function(done){
    expect(false).to.be.false // Recommended
    expect(false).to.not.be.true // Not recommended

    expect(1).to.equal(1) // Recommended
    expect(1).to.not.be.true // Not recommended

    expect('foo').to.equal('foo') // Recommended
    expect([]).to.be.an('array') // Not recommended
    expect({a:1}).to.eql({a:1}).to.not.equal({a:1})
    // expect({a:1}).to.deep.equal({a:1}).to.not.equal({a:1})

    expect('foo').to.have.lengthOf(3) // Recommended
    // expect('foo').to.have.lengthOf.above(2) // Not recommended

    expect([1, 2, 3]).to.have.lengthOf(3) // Recommended
    // expect([1, 2, 3]).to.have.lengthOf.above(2) // Not recommended

    expect(3).to.be.above(2, 'nooo why fail??')
    // expect(1, 'nooo why failsadads??').to.be.above(2)

    // expect({x: {a: 1}}).to.have.deep.property('x', {a: 1})
    expect({x: {a: 1}}).to.not.have.property('x', {a: 1})

    expect({a: 1}).to.have.property('a', 1, 'nooo why fail??').that.is.a('number')

    expect({a: 1}).to.have.ownPropertyDescriptor('a', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 1,
    })

    expect(NaN).to.be.NaN
    expect(Infinity).to.be.Infinity
    let frozenObj = Object.freeze({a:1})
    expect(frozenObj, 'nooo why fail??').to.be.frozen
    expect({a:1})
    function Cat () {}
    Cat.prototype.meow = function () {}

    expect(new Cat()).to.respondTo('meow','no method')
    done()
  })
})

