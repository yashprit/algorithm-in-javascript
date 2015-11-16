//https://en.wikipedia.org/wiki/Reverse_Polish_notation

var Stack = require('jal').Stack;

/**
  * @param {String} expression to be converted into rpn
  */
module.exports = function(expression){
  var operators = ['+','-','/','*'];
  var operations = ['(', ')'];
  var chars = expression.split('');
  var count = 0;
  for(var i = 0; i < chars.length; i++){
    if(chars[i] === '('){
      count++
    } else if(chars[i] === ')'){
      count--
    }
  }

  //if opening brackets doesn't have correspoding closing brackets
  if(count){
    throw new Error('expression is not valid')
  }

  var count = 0;

  var stack = new Stack();

  for(var i = 0; i < chars.length; i++){
    var value = chars[i];

    if(value === ')' && count > 0){
      var oprandOne = stack.pop();
      var operator = stack.pop();
      var oprandTwo = stack.pop();
      var result = oprandTwo + oprandOne + operator;
      stack.push(result);
      count--;
    } else if(value === '('){
      count++;
    } else {
      stack.push(value)
    }
  }

  return stack.pop();
}
