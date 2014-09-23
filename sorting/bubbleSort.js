'use strict';
/* BASIC BUBBLE SORT ALGORITHM

  1. Compare first item to the second item
  2. Swap if first item should be after second
  3. Compare second to third item
  4. If second should be after third, swap
  5. Continue until end of data set;

*/
//FAST BUBBLE SORT
var bubbleSort = function(arr) {
    var len = arr.length,
        temp;
    for (var i = 0; i < len; i++) {
        for (var j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

//MEDIUM BUBBLE SORT
var bubbleSort2 = function(arr) {

    var len = arr.length,
        i = 0,
        temp;
    while (i < len) {
        for (var j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
        i++;
    }
    return arr;
};

//SLOWEST BUBBLE SORT
var bubbleSort3 = function(arr) {
    var length = arr.length,
        temp;
    var sorted = [];
    while (sorted.length < length) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
        var largest = Number(arr.splice(arr.length - 1).join(''));
        sorted.unshift(largest);
    }

    return sorted;
};


var bubbleSort4 = function(arr) {
    var len = arr.length,
        temp;
    arr.forEach(function(_, index) {
        for (var i = 0, stop = len - index; i < stop; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    });
    return arr;
};


/*************TEST SORT METHODS*******************/

var range = function(start, stop, step) {
    var arr = [];
    while (start <= stop) {
        arr.push(start);
        start += step;
    }
    return arr;
};


Array.prototype.shuffle = function() {
    var listClone = this.slice(), //clone list
        rndPos, temp;
    for (var i = 0; i < listClone.length - 1; i++) {
        rndPos = Math.floor(Math.random() * listClone.length);
        temp = listClone[i]; //store i value in temp array;
        listClone[i] = listClone[rndPos]; //replace i with random value
        listClone[rndPos] = temp; // replace random with origina i stored in temp;
    }
    return listClone;
};

var haystack = range(1, 15, 1).shuffle();
console.log(haystack);
console.log('Bubble Sort ForEach: ' + bubbleSort4(haystack)); //Bubble Sort ForEach: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
console.log('Bubble Sort Fast: ' + bubbleSort(haystack)); // Bubble Sort Fast: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
console.log('Bubble Sort Medium: ' + bubbleSort2(haystack)); //Bubble Sort Medium: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
console.log('Bubble Sort Slow: ' + bubbleSort3(haystack)); //Bubble Sort Slow: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
