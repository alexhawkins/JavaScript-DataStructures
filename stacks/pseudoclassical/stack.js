//pseudo-classical inheritence

//create stack constructor
var Stack = function() {
    this.length = 0;
    this.storage = {};
};

//create an add/push method for our prototype 
Stack.prototype.add = function(value) {
    this.storage[this.length] = value;
    this.length++;
};

//create a remove/pop method for our prototype 
Stack.prototype.remove = function() {
    //make sure item exists to remove
    if (this.length > 0) {
        //get last item
        var result = this.storage[this.length - 1];
        delete this.storage[this.length - 1];
        this.length--;
        return result;
    }
};

//let us check the size
Stack.prototype.size = function() {
    return this.length;
};


//create a new instance of Stack using the new
//to instantiate our class
var newStack = new Stack();
newStack.add(10);
console.log(newStack);
