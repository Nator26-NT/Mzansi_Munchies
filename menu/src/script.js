function addToCart(item) {
    const cartItems = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = item;
    cartItems.appendChild(li);
}
