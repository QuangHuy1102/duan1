function changeMainImage(imageUrl) {
    document.getElementById('main-image').src = imageUrl;
}

function decreaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
}