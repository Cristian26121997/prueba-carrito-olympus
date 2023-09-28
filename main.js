let cartItems = [];
let total = 0;

function addToCart(button) {
  const product = button.parentElement;
  const productName = product.innerText.split(' - ')[0];
  const productPrice = parseFloat(product.getAttribute('data-price'));

  const existingProduct = cartItems.find(item => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cartItems.push({ name: productName, price: productPrice, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartList.innerHTML = '';
  total = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${(item.price * item.quantity).toFixed(2)} CLP (${item.quantity} unidad${item.quantity > 1 ? 'es' : ''})`;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  totalElement.innerText = total.toFixed(2);
}
