const items = document.querySelectorAll('.item');
items.forEach(item => {
    const quantityInput = item.querySelector('.quantity');
    const priceElement = item.querySelector('.item-price');
    const totalElement = item.querySelector('.total-price');
    const deleteButton = item.querySelector('.delete');
    const likeButton = item.querySelector('.like');

    // Initial values
    let price = parseFloat(priceElement.textContent.slice(1));
    let quantity = parseInt(quantityInput.value);

    // Update total price
    function updateTotal() {
        const total = price * quantity;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Event listeners
    quantityInput.addEventListener('input', () => {
        quantity = parseInt(quantityInput.value);
        updateTotal();
    });

    deleteButton.addEventListener('click', () => {
        item.remove();
    });

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
    });

    // Initial total update
    updateTotal();
});