// recursive using function which is called inside of that function is called recursive function


function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return factorial(--i) * i;
}

console.log(factorial(7));