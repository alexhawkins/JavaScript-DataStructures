
/**********FUNCTIONAL - SHARED STACK IMPLEMENTATION ****************/
var makeStack = function() {
    var stack = {
        storage: {},
        length: 0
    };

    extend(stack, stackMethods);
    return stack;
};

//extend methods to our stack object 
var extend = function(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
};

var stackMethods = {

    add: function(value) {
        this.storage[this.length] = value;
        this.length++;
    },

    remove: function() {
        if (this.size() > 0) {
            var result = this.storage[this.length - 1];
            delete this.storage[this.length - 1];
            this.length--;
            return result;
        } else {
            return null;
        }
    },

    size: function() {
        return this.length;
    }
};

//TESTS
var newStack = makeStack(); //create stack instance
newStack.add(10);
newStack.add('dogs');
console.log(newStack.storage); //{ '0': 10, '1': 'dogs' }
console.log(newStack.size()); //2
newStack.add(20); 
console.log(newStack.storage); //{ '0': 10, '1': 'dogs', '2': 20 }
newStack.remove();
console.log(newStack.storage); //{ '0': 10, '1': 'dogs' }
newStack.remove();
newStack.remove();
console.log(newStack.storage); // {}
console.log(newStack.remove()); // null


