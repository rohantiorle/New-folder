let cartCount = 0;

function addToCart() {
  cartCount += 1;
  document.getElementById('cart-count').textContent = cartCount;
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-card button').forEach((button) => {
    button.addEventListener('click', addToCart);
  });
});
