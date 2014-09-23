var selectionSort = function(arr) {

    var lowest,
        len = arr.length,
        temp;

    arr.forEach(function(_, index) {
        lowest = index; //assume index is the lowest, prove wrong
        for (var i = index + 1; i < len; i++) {
            if (arr[i] < arr[lowest])
                lowest = i;
        }
        //if the lowest isn't in our position, swap it.
        if (index != lowest) {
            temp = arr[index];
            arr[index] = arr[lowest];
            arr[lowest] = temp;
        }
    });
    return arr;
};


console.log(selectionSort([9, 5, 10, 1, 4, 2, 12, 14, 13, 3, 6, 8, 11, 15, 7])); 
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
