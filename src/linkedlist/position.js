/**
 * find nth element from end
 *
 * If length is len, than from end number would be len - n + 1
 *
 * @param  {Number} index specifiy index of linkedlist from end
 *
 * @return {Node}
 */
module.exports = {
  /**
   * Method 1:
   *   calculate position using len - n -1
   * @param  {Object} list
   * @param  {number} index from last
   * @return {Object} found position
   */
  usingCal: function(list, index) {
    var size = list.size();
    if(index > size){
      return;
    }

    var position = size - index + 1;

    list = list._head;

    for(var i = 1; i < position; i++){
      list = list._next;
    }
    return list;
  },

  /**
   * Method 2:
   *   using two pointers
   * @param  {Object} list
   * @param  {Number} index from last
   * @return {Object}   found position
   */
  usingTwoPointer: function(list, index){
    var positionPtr = list._head;
    var currentPtr = list._head;
    var count = 0;

    if(!list){
      throw new Error('list should be defined');
    }

    while(count < index){
      if(!positionPtr){
        return;
      }
      positionPtr = positionPtr._next;
      count++;
    }

    while(positionPtr !== null){
      positionPtr = positionPtr._next;
      currentPtr = currentPtr._next;
    }

    return currentPtr;
  }
}
