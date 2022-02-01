// define an array 
var arrayName = [2, 5, 6, 7, 0, 25, 52];

// to finding array length
const arrayLength = arrayName.length;
console.log(arrayLength);

// get index by input value 
const arrayIndexByValue = arrayName.indexOf(0);
console.log(arrayIndexByValue);

// get value by index number 
const arrayValue = arrayName[4];
console.log(arrayValue);

// add items in the last of array 
const addItemsOnLast = arrayName.push(45);
console.log(arrayName);

// add item in the first position 
const addItemsOnFirst = arrayName.unshift(1);
console.log(arrayName);

// remove item from first 
const removeItemFromFirst = arrayName.shift();
console.log(arrayName);

// remove item from last 
const removeItemFromLast = arrayName.pop();
console.log(arrayName);