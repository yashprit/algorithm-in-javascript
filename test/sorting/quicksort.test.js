var QuickSort = require('../../src/sorting/quicksort.js');
var expect = require('chai').expect;

var qs = QuickSort();

describe("Testing circular algorithm", function() {
  
  it('Sort list', function(){
    var list = [6,5,3,1,8,7,2,4];
    qs.sort(list);
    expect(qs.get()).to.eql([1,2,3,4,5,6,7,8]);
  });
});
