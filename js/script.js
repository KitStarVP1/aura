document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Shopping Cart Functionality
    const addToCartButtons = document.querySelectorAll('.btn-outline-custom');
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
