var
  SingleLinkedList = require('jal').SingleLinkedList,
  position = require('../../src/linkedlist/position'),
  expect = require('chai').expect;


describe("Testing found position from last", function() {

  var sll;

  beforeEach(function(){
    sll = new SingleLinkedList();
  });

  it('should found position using method len-n+1', function(){
    var usingCal = position.usingCal;
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    var node = usingCal(sll, 2);
    expect(node._data).to.be.equal(3);
  });

  it('should found position using method two pointer', function(){
    var usingTwoPointer = position.usingTwoPointer;
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    var node = usingTwoPointer(sll, 3);
    expect(node._data).to.be.equal(2);
  });

});

