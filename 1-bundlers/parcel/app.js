/* import * as shoppingCart from "./shoppingCart.js"
console.log(shoppingCart.cart)
console.log(shoppingCart.addToCart) */

/* import * as shoppingCart from "./shoppingCart.js"
const { cart, shoppingCart } = shoppingCart
console.log(cart)
console.log(addToCart) */

import { cart, addToCart } from "./shoppingCart.js"
console.log(cart)
console.log(addToCart)

addToCart('shampoo', 5)
addToCart('acondicionador', 1)
addToCart('jabon de cuerpo', 3)
console.log(cart)