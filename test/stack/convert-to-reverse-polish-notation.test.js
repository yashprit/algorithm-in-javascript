var rpn = require('../../src/stack/convert-to-reverse-polish-notation.js');
var expect = require('chai').expect;

describe("Testing reverse polish notation algorithm", function() {

  it('should show correct data', function(){
    var exp = '(a+(b*c))';
    var output = rpn(exp);
    expect(output).to.be.equal('abc*+');
  });

  it('should show correct data', function(){
    var exp = '((a+t)*((b+(a+c))^(c+d)))';
    var output = rpn(exp);
    expect(output).to.be.equal('at+bac++cd+^*');
  });

  it('should show correct data', function(){
    var exp = '(()';
    expect(rpn.bind(rpn, exp)).to.throw(/expression is not valid/);
  });
});
