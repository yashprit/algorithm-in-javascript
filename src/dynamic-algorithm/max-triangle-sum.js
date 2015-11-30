module.exports = function (triangle) {
  while (triangle.length !== 1) {
    var length = triangle.length;
    var row = [];

    var currentArray = length - 2;

    var endArray = length - 1;

    var currentArray = triangle[currentArray];

    for (var i = 0; i < currentArray.length; i++) {
      var result = currentArray[i] + Math.max(triangle[endArray][i], triangle[endArray][i + 1]);
      row.push(result);
    }

    triangle.pop();
    triangle.pop();

    triangle.push(row);
  }
  
  var result = triangle[0][0];

  return result;
}
