module.exports = function(num){
  var result = [1],
  temp = 0;

  for (var i = num; i > 1; i--) {
    for (var j = 0; j < result.length; j++) {
      var position = result[j] * i + temp;
      var reminder = position % 10;
      temp = parseInt(position / 10);
      result[j] = reminder;
    }
    if (temp) {
      if(temp > 10){
        temp = temp / 10;
      }
      result[j] = temp;
      temp = 0;
    }
  }
  var output = 0;
  for(var i = 0; i < result.length; i++){
    output += result[i] * Math.pow(10, (i));
  }
  return output;
}
