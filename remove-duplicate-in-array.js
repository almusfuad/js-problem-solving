let names = [
    'Rahim', 'Karim', 'Jabbar', 'Motin', 'Rahim', 'Karim'
];

let unique = [];

const removeDuplicate = (names) => {
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}


const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);