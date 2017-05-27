var expect = require("chai").expect;
var request = require('axios');
var util = require('util');
var apiurl = "http://localhost:9988/";


describe('search', function () {
  it("keywords", function (done) {
    let url = apiurl + 'api/searchKeywords/test';
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
    };

    request(postBody).then( function (res) {
      console.log(util.inspect(res, true, null, true));
      done()
    });

  });




});




