let number = 1;
let result = 1;



function factorial(number) {
    for (let i = 1; i <= number; i++) {
        result = result * i;
        console.log("Factorial of your number is,", result);
    }
}


factorial(6);