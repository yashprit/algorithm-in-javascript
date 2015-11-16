var rpn = require('../../src/stack/reverse-polish-notation.js');
var expect = require('chai').expect;

describe("Testing circular algorithm", function() {

  it('should show correct data', function(){
    var exp = '21+3*';
    var output = rpn(exp);
    expect(output).to.be.equal(9);
  });
});
