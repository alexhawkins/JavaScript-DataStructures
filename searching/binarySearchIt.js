var binarySearch = function(needle, haystack) {
    var low = 0,
        high = haystack.length - 1;
    haystack.sort(function(x, y) {
        return x - y;
    });

    while (low <= high) {
        //set middle point
        var middle = Math.floor((low + high) / 2);
        if (needle === haystack[middle])
            return middle;
        //check right side of haystack
        else if (needle > haystack[middle])
            low = middle + 1;
        else
            high = middle - 1;
    }
    return -1;
};


var range = function(start, stop, step) {
    var arr = [];
    while (start < stop) {
        arr.push(start);
        start += step;
    }
    return arr;
};


Array.prototype.shuffle = function() {
    var clone = this.slice(0),
        rndPos, temp;
    for (var i = 0; i < clone.length; i++) {
        rndPos = Math.floor(Math.random() * clone.length);
        temp = clone[i];
        clone[i] = clone[rndPos];
        clone[rndPos] = temp;
    }
    return clone;
};

var haystack = range(0, 500, 10).shuffle();
console.log(haystack);

console.log(binarySearch(360, haystack));
