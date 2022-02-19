const numbers = [45, 1, 5, 90, 99, 42, 0];

console.log('Numbers array is:', numbers);

const largest = Math.max(...numbers);

// console.log('The largest number in this array is:', largest);



//  using function and details

function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

const inputArray = [45, 1, 5, 90, 99, 42, 0];
const biggest = largestElement(inputArray);

console.log(biggest);