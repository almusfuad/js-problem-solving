function smallestElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

const givenArray = [23, 3, 4, 5, 1, 0, 55, 3];
const smallest = smallestElement(givenArray);
console.log(smallest);