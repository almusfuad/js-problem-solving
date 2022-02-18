let number = 1;
let result = 1;


function decFactorial(number) {
    for (let i = number; i >= 1; i--) {
        result = result * i;
        console.log("This is your decrement factorial result,", result);
    }


}


decFactorial(6);