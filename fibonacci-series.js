// fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...




function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return "Please, give a number.";
    }

    if (num < 2) {
        return 'Please, give a value higher than 2.';
    }

    const fibo = [0, 1];

    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    console.log('Your fibonacci series is:', fibo);
}


fibonacciSeries(11);