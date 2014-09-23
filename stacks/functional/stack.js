//functional stack implementation

var makeStack = function() {
    //set local variables to use throughout
    var length = 0,
        storage = {},
        stack = {

            /*****METHODS*****/
            push: function(value) {
                storage[length] = value;
                length++;
            },

            pop: function() {
                if (length > 0) {
                    var result = storage[length - 1];
                    delete storage[length - 1];
                    length--;
                    return result;
                }
            },

            size: function() {
                return length;
            },

            storage: function() {
                return storage;
            }
        };
    return stack;

};
var stack = makeStack();
stack.push(10);
stack.push(20);
console.log(stack.size()); //2
console.log(stack.storage()); //{ '0': 10, '1': 20 }
