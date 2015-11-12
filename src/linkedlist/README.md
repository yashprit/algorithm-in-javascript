# LinkedList
> List of algorithm using 

## List of Algorithm using LinkedList
- [Circular](#circular)
- [Position](#position)

### Circular
Check given a linked list is either circular or or not circular 

![Single linked list](http://www.programmerinterview.com/images/singly-linked-list.png)

![Circular linked list](http://www.programmerinterview.com/images/circular-linked-list.png)


### Position 
Find position of node from end of linkedlist

##### Using Method 1 :-
Calculate index from first by using 
 index_from_first = length - index_from_last + 1


##### Using Method 2 :-
Take two pointer, advance first pointer till index from last
start second and first pointer until first pointer become null
position of second pointer will give you, position from last
