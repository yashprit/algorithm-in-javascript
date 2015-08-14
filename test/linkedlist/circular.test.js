var
  jal = require('jal'),
  isCircular = require('../../src/linkedlist/circular'),
  expect = require('chai').expect;


CircularLinkedList jal.CircularLinkedList;
SingleLinkedList = jal.SingleLinkedList;

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

