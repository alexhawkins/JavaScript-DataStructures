'use strict';

//create namespace
var LINKEDLIST = {};

LINKEDLIST.linkedListMaker = function() {
    //global private variables
    var head = null;
    var length = 0;

    //create list object
    var linkedList = {};
    /*********LIST METHODS*********/

    //getter methods
    linkedList.getLength = function() {
        return length;
    };
    linkedList.getHead = function() {
        return head;
    };

    //METHOD: add a node to our linked list
    linkedList.add = function(data) {
        //create node object each time add is called
        var node = {
            //each node will contain these properities
            data: data,
            next: null
        };
        //check to see if anything has been added to our list
        if (head === null) {
            //set our head value to our node
            head = node;
        }
        //otherwise find the last node so we know where to append our new one
        else {
            var current = head;
            //loop through our list until we find a node with a next value that is null
            while (current.next) {
                //set current to the next node
                //until we find a node that is
                //not attached to anything else
                current = current.next;
            }
            //exiting the while loops means we've found the last node
            //so set our last node's next property to the node ojbect
            //we are trying to add
            current.next = node;
        }
        //we now have one more node than we had before
        //so increment our list length
        length++;
        return this; //in case we want to chain our methods
    };

    //METHOD: traverse our list to find a node
    linkedList.traverse = function() {

    };

    return linkedList;

};



var newList = LINKEDLIST.linkedListMaker();
newList.add(10);
newList.add(20);
newList.add(30);
newList.add(40);
newList.add(10);
console.log(newList.getLength());
console.log(newList.getHead());
