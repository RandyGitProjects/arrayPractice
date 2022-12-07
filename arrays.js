var arrayStrings = ["Dark Knight", "The Other Guys", "Jurrasic Park", "Bram Stokers Dracula"];
var arrayNumbers = [32, 32, 13, 9];
var arrayBooleans = [true, false, false, false, true];

// This method will remove the first element in the chosen array.
console.log(arrayBooleans.shift())
// This method will remove the last element in the chosen array.
console.log(arrayNumbers.pop())
// This method will add a new element to end of the chosen array.
console.log(arrayStrings.push ("Star Wars"))

// Knowledge of index's
// The first index of an array is 0. In the following array the Dark Knight will be index[0].
console.log(arrayStrings[0])
//In the following array the Star Wars will be index[4]. This is because in the above code we used the method push() to add a new element to the end of the chosen array.
console.log(arrayStrings[4])
//In the following array there was 5 elements however, with the array shift method the first index was removed which was the element "true". After the first index was removed 
// this made the last index slide into position 3 and index 3 should be element "true".
console.log(arrayBooleans[3])
//In the following array there was a total of 4 elements but with the array pop method the last element was removed. The last element in this array was number 9 and it was removed making 13 now
//the last element in the array.
console.log(arrayNumbers[2])
