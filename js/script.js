document.addEventListener('DOMContentLoaded', function () {
    // Shopping Cart Functionality
    const addToCartButtons = document.querySelectorAll('.product-card .btn-outline-dark');
    const cartCountBadge = document.getElementById('cart-count');
    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            cartItemCount++;
            cartCountBadge.innerText = cartItemCount;
            if (cartCountBadge.style.display === 'none') {
                cartCountBadge.style.display = 'block';
            }
        });
    });
});