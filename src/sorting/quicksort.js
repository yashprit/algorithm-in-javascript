function QuickSort(list){
  if(!(this instanceof QuickSort)){
    return new QuickSort(list);
  }
}

QuickSort.prototype.sort = function(list){
  this._list = list;
  var lowerBound = 0;
  var higherBound = this._list.length - 1;

  this._quick(lowerBound, higherBound);
}

QuickSort.prototype._quick = function(lowerBound, higherBound){
    var i = lowerBound;
    var j = higherBound;

    var pivot = this._list[parseInt((lowerBound + (higherBound - lowerBound)/2), 10)];

    while(i <= j) {

      while(this._list[i] < pivot){
        i++;
      }

      while(this._list[j] > pivot){
        j--;
      }

      if(i <= j){
        var temp = this._list[i];
        this._list[i] = this._list[j];
        this._list[j] = temp;
        i++;
        j--;
      }
    }
    
    if(lowerBound < j){
      this._quick(lowerBound, j);
    }

    if(higherBound > i){
      this._quick(i, higherBound);
    }
  }


QuickSort.prototype.get = function (){
  return this._list;
}

module.exports = QuickSort;
