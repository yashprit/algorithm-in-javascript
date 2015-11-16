var fact = require('../src/small-factorials.js');
var expect = require('chai').expect;

describe("Testing small-factorials algorithm using array multiplcation", function() {

  it('test small number', function(){
    var num = 5;
    var output = fact(num);
    expect(output).to.be.equal(120);
  });

  it('test small number', function(){
    var num = 100;
    var output = fact(num);
    expect(output).to.be.equal(6.962239848649753e+96);
  });
});
