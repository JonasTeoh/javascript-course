export const cart = [];

export function addToCart(productId) {
    var inputQuantity = document.getElementById("js-quantity-input").value;
    if (cart.find(cartItem => cartItem.productId === productId)) {
        cart.find(cartItem => {
            if (cartItem.productId === productId) {
                p.quantity++;
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