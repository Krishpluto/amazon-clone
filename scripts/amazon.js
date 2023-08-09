import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

//create a array (projects) contains objects(items and details). step 7 - instead of adding one by one link data/products.js to create objects by creating another script tag above the amazon.js in the html file
// const products = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4.5,
//         count: 87
//     },
//     priceCents: 1090
// }, {
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating: {
//         stars: 4,
//         count: 127
//     },
//     priceCents: 2095
// }, {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//         stars: 4.5,
//         count: 56
//     },
//     priceCents: 799
// }, {
//     image: 'images/products/black-2-slot-toaster.jpg',
//     name: '2 Slot Toaster - Black',
//     rating: {
//         stars: 5,
//         count: 2197
//     },
//     priceCents: 1899

// }];

//2. combine all the html to a one string and put it in one webpage

//3. create a variable for webpage
let productsHTML = '';

//1.loop thru the array using for each method to generate html to store different products in the amazon.html page

// 9.used Data Attribute to insert product name. it is just a HTML Attribute. it starts with "data-" then give it any name. purpose is data attribute is used to attach any information to an element
products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
            &#8377; ${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
                Add to Cart
            </button>
            </div>
        `;

})

//4. add additional class name in the products-grid class name. new additional class name = js-products-grid.
//5. using DOM we are putting the generated html into the html page inside js-products-grid class

document.querySelector('.js-products-grid').innerHTML = productsHTML;

//6. deleted the products in the html page under products-grid class even after the products will be displayed in the page because we generated html in js and injected in html page using DOM.

//8. add event listener to js-add-to-cart. created another class name (js-add-to-cart) to add-to-cart-button button-primary class name for Add to Cart button.

//10.the .dataset property is used to access custom data attributes on an HTML element.


function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    // update the cart quantity 
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();  
     });
});

