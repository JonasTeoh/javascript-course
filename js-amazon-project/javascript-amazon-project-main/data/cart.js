export const cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1
}];

export function addToCart(productId) {
    var inputQuantity = document.getElementById("js-quantity-input").value;
    if (cart.find(cartItem => cartItem.productId === productId)) {
        cart.find(cartItem => {
            if (cartItem.productId === productId) {
                cartItem.quantity++;
            }
        })
    } else {
        cart.push({
            productId: productId,
            quantity: inputQuantity
        });
    }
    console.log(cart);
}

export function displayCartQuantity() {
    let count = 0;
    cart.forEach((cartProduct) => {
        console.log(cartProduct.quantity);
        count += parseInt(cartProduct.quantity);
        document.querySelector('.js-cart-quantity').innerHTML = count;
    })
}