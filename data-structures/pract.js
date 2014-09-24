'use strict';

var MYAPP = {};

MYAPP.linkedListMake = function() {

    var linkedList = {};
    linkedList.length = 0;
    linkedList.head = null;


    /*METHODS*/
    linkedList.add = function(data) {

        var node = {
                data: data,
                next: null
            },
            current;
        if (this.head === null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;

            }
            current.next = node;
        }
        this.length++;
        return this
    };

    linkedList.traverse = function() {
      return this;
    };

    linkedList.remove = function() {

    }
    return linkedList;
};

var newList = MYAPP.linkedListMake();
newList.add(10);
newList.add(20);
newList.add(30);
newList.add(40);
console.log(newList.add(10).traverse());
console.log(newList);
