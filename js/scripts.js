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

document.addEventListener("DOMContentLoaded", function() {
    // Khi trang tải xong, ẩn nút "Lưu" và hiện nút "Cập nhật thông tin"
    const updateBtn = document.getElementById('update-btn');
    const saveBtn = document.getElementById('save-btn');

    // Bắt sự kiện khi nhấn nút "Cập nhật thông tin"
    updateBtn.addEventListener('click', enableEdit);

    // Bắt sự kiện khi nhấn nút "Lưu"
    saveBtn.addEventListener('click', saveChanges);
});

function enableEdit() {
    // Bật chế độ chỉnh sửa cho tất cả input
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.disabled = false;  // Cho phép chỉnh sửa
    });

    // Ẩn nút "Cập nhật thông tin" và hiển thị nút "Lưu"
    document.getElementById('update-btn').style.display = 'none';
    document.getElementById('save-btn').style.display = 'inline-block';
}

function saveChanges(event) {
    // Ngăn không cho form submit ngay lập tức
    event.preventDefault();

    // Lấy tất cả các input trong form
    const inputs = document.querySelectorAll('input');
    
    // Kiểm tra và in các giá trị đã thay đổi vào console (hoặc gửi lên server)
    inputs.forEach(input => {
        console.log(input.name + ": " + input.value);  // Bạn có thể thay đổi phần này để lưu dữ liệu thực tế
    });

    // Tắt chế độ chỉnh sửa
    inputs.forEach(input => {
        input.disabled = true;
    });

    // Ẩn nút "Lưu" và hiển thị lại nút "Cập nhật thông tin"
    document.getElementById('update-btn').style.display = 'inline-block';
    document.getElementById('save-btn').style.display = 'none';
}








