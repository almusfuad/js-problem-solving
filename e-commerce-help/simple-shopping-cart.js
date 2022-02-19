const cart = [{
        name: 'shirt',
        price: 430,
        quantity: 2,
    },
    {
        name: 'pants',
        price: 750,
        quantity: 2,
    },
    {
        name: 'shoes',
        price: 1300,
        quantity: 1,
    },
]


const cartCalculate = (cart) => {
    // initialize the cart total to make it number type
    let cartTotal = 0;

    // find every product value respectively
    for (const product of cart) {

        // find product total using every product quantity and value
        const productTotal = product.price * product.quantity;

        cartTotal = cartTotal + productTotal;
    }
    return cartTotal;
}

console.log(cartCalculate(cart));