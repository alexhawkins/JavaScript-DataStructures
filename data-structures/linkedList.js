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

    //METHOD: find an item in our list
    linkedList.item = function(index) {
        //check to see if item is even in our list
        if (index > -1 && index < length) {
            var current = head;
            for (var i = 0; i < index; i++)
                current = current.next;
            return current.data;
        } else {
            return null;
        }
        return this;
    };

    linkedList.contains = function(element) {
        //set current node to the head
        var current = head;
        for (var i = 0; i < length; i++) {
            //check node data = element we're looking for
            if (current.data === element)
                return element + ' found at index: ' + i;
            else //check the next node
                current = current.next;
        }
        return null;
    };
    return linkedList;

    linkedList.remove = function(index){
      
    }
};



var newList = LINKEDLIST.linkedListMaker();
newList.add(10).add(20).add(30).add(40).add(10);
console.log(newList.getLength()); //5
console.log(newList.getHead()); //{ data: 10, next: { data: 20, next: { data: 30, next: [Object] } } }

var newList12 = LINKEDLIST.linkedListMaker();
newList12.add(10);
console.log(newList12.getLength()); //1
console.log(newList12.getHead()); //{ data: 10, next: null }
console.log(newList.item(20)); //null
console.log(newList.item(3)); //40
console.log(newList.contains(40)); //40 found at index: 3
console.log(newList.add(100).contains(100)); //100 found at index: 5
