import { cart, removeFromCart, displayCartQuantity, updateCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/price.js';

let productSummaryHTML = ``;

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct;
    products.forEach((product) => {
        if(productId === product.id){
            matchingProduct = product;
        }
    })
    productSummaryHTML +=
    `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image" src="${matchingProduct.image}">

            <div class="cart-item-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-price">
                    $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                    <span>
                        Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link js-update-link-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
                        Update
                    </span>
                    <span class="edit-quantity js-edit-quantity-${matchingProduct.id}">
                        <input type="number" class="quantity-input js-quantity-input js-quantity-input-${matchingProduct.id}" data-product-id="${matchingProduct.id}" min="0" max="1000">
                        <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">
                            Save
                        </span>
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                        Delete
                    </span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                <div class="delivery-option">
                    <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                    <div>
                        <div class="delivery-option-date">
                            Tuesday, June 21
                        </div>
                        <div class="delivery-option-price">
                            FREE Shipping
                        </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                    <div>
                        <div class="delivery-option-date">
                            Wednesday, June 15
                        </div>
                        <div class="delivery-option-price">
                            $4.99 - Shipping
                        </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                    <div>
                        <div class="delivery-option-date">
                            Monday, June 13
                        </div>
                        <div class="delivery-option-price">
                            $9.99 - Shipping
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
})

document.querySelector('.js-order-summary').innerHTML = productSummaryHTML;
displayCartQuantity();

//delete cart item
document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);
        document.querySelector(`.js-cart-item-container-${productId}`).remove();
    })
})

//update cart quantity
document.querySelectorAll('.js-update-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        document.querySelector(`.js-edit-quantity-${productId}`).classList.add('editing-quantity');
        document.querySelector(`.js-quantity-label-${productId}`).classList.add('edit-quantity');
        document.querySelector(`.js-update-link-${productId}`).classList.add('edit-quantity');
    })
})

//save updated cart quantity
document.querySelectorAll('.js-save-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        updateItem(productId);
    })
})

document.querySelectorAll('.js-quantity-input').forEach((input) => {
    input.addEventListener('keydown', (event) => {
        if(event.key === 'e' || event.key === 'E' || event.key === '-'){
            event.preventDefault();
        }
        console.log(event.key, input.vale);
        if(input.value > 99){
            if(event.key !== 'Backspace'){
                input.value = 1000;
                event.preventDefault();
            }
            return;
        }
        const productId = input.dataset.productId;
        if(event.key === 'Enter'){
            updateItem(productId);
        }
    })
})

function updateItem(productId) {
    const inputQuantity = parseInt(document.querySelector(`.js-quantity-input-${productId}`).value);
    if(inputQuantity < 0 || inputQuantity > 1000){
        alert('Not a valid quantity. Please insert between 0 - 1000.');
    } else {
        updateCart(productId, inputQuantity);
        document.querySelector(`.js-quantity-label-${productId}`).innerHTML = inputQuantity;
        document.querySelector(`.js-edit-quantity-${productId}`).classList.remove('editing-quantity');
        document.querySelector(`.js-quantity-label-${productId}`).classList.remove('edit-quantity');
        document.querySelector(`.js-update-link-${productId}`).classList.remove('edit-quantity');
    }
}
