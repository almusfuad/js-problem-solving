const numbers = [];

function arrayTotal(numbers) {
    let sum = 0;
    //     var length = numbers.length;
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}


const total = arrayTotal([44, 23, 34, 54, 5, 78]);
console.log(total);