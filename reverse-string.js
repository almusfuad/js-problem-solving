let greetings = 'Hello, how are you?';

const reverseString = (text) => {
    let reverse = '';
    for (const letter of text) {
        // '' = first_letter_of_parameter + ''
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(greetings);
console.log(reversed);