/**
* Check for circular linkedlist
*
* .isCircular()
*
* @returns {Boolean} this linkedlist is circular
*
*/
module.exports = function isCircular(list) {
  if (list._head == null) {
    return false;
  }
  //take two pointers
  var fast = list._head;
  var slow = list._head;
  while (fast && fast._next) {
    if (fast._next._next == slow) {
      return true;
    }
    fast = fast._next._next;
    slow = slow._next;
  }
  return false;
}
