//carrito de compras
let cart = [];

// función que agregue objetos al carrito
function addToCart(product, quantity) {
  // const item = {
  //   product: product,
  //   quantity: quantity
  // }
  
  const item = {
    product,
    quantity
  }
  cart.push(item);
  console.log(`Has agregado ${quantity} ${product}`);
}

export {
  cart,
  addToCart,
}