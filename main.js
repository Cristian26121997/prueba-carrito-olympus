let cartItems = [];
let total = 0;

function addToCart(button) {
  const product = button.parentElement;
  const productName = product.innerText.split(' - ')[0];
  const productPrice = parseFloat(product.getAttribute('data-price'));
  cartItems.push({ name: productName, price: productPrice });
  
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartList.innerHTML = '';
  total = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalElement.innerText = total.toFixed(2);
}
