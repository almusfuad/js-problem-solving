const phones = [{
        name: 'samsung',
        price: 45000,
        camera: 10,
        storage: 32,
    },
    {
        name: 'apple',
        price: 54000,
        camera: 8,
        storage: 4,
    },
];

const cheapestPhone = (phones) => {
    // let assign a value that could be a cheap phone
    let cheapest = phones[0];
    // find all phone in phones array
    for (const phone of phones) {
        // compare single phone price among whole phones
        if (phone.price < phones.price) {
            cheapest = phone;
        }
    }
    return cheapest;
};

const desirePhone = cheapestPhone(phones);
console.log(desirePhone);