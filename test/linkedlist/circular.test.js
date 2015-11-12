var CircularLinkedList = require('jal').CircularLinkedList;
var SingleLinkedList = require('jal').SingleLinkedList;
var isCircular = require('../../src/linkedlist/circular');
var expect = require('chai').expect;

var cll, sll;

describe("Testing circular algorithm", function() {

  beforeEach(function(){
    cll = new CircularLinkedList();
    sll = new SingleLinkedList();
  });

  it('should be true', function(){
    cll.add(1);
    cll.add(2);
    expect(isCircular(cll)).to.be.true;
  });

  it('should not be CircularLinkedList', function(){
    sll.push(1);
    sll.push(2);
    expect(isCircular(cll)).to.be.false;
  })

});

