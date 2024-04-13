export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1
    },{
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }];
}


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
    saveToStorage()
}

export function displayCartQuantity() {
    let count = 0;
    cart.forEach((cartProduct) => {
        console.log(cartProduct.quantity);
        count += parseInt(cartProduct.quantity);
    })
    let cartElement = document.querySelector('.js-cart-quantity');
    if(cartElement !== null){
        cartElement.innerHTML = count;
    }
    let itemsCountElement = document.querySelector('.js-checkout-items-count');
    if(itemsCountElement !== null){
        itemsCountElement.innerHTML = `${count} items`;
    }
}

export function removeFromCart(productId) {
    let index = 0
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId){
            cart.splice(index, 1);
        }
        index++;
        console.log(index);
    })
    saveToStorage();
    displayCartQuantity()
}

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}