var Stack = require('jal').Stack;

module.exports = function(expression){
  var operators = ['+','-','/','*', '(', ')'];
  var chars = expression.split('');

  var stack = new Stack();

  for(var i = 0; i < chars.length; i++){
    var value = chars[i];
    if(operators.indexOf(value) === -1){
      stack.push(parseInt(value, 10));
    } else {
      switch(chars[i]) {
        case '+':
          var a = stack.pop();
          var b = stack.pop();
          var result = a + b;
          stack.push(result);
        break;
        case '-':
          var a = stack.pop();
          var b = stack.pop();
          var result = a - b;
          stack.push(result);
        break;
        case '/':
          var a = stack.pop();
          var b = stack.pop();
          var result = a / b;
          stack.push(result);
        break;
        case '*':
          var a = stack.pop();
          var b = stack.pop();
          var result = a * b;
          stack.push(result);
        break;
      }
    }
  }
  return stack.pop();
}
