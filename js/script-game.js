// Lấy các phần tử từ HTML
const modal = document.getElementById('game-modal');
const modalImage = document.getElementById('game-image');
// Lấy nút X để thêm sự kiện click
const closeButton = document.querySelector('.close-button');

/**
 * Hiển thị modal với một ảnh game cụ thể.
 * @param {string} imageName - Tên file của ảnh (ví dụ: 'genshin.png').
 */
function showGame(imageName) {
    // Đặt nguồn ảnh cho thẻ img bên trong modal
    modalImage.src = 'picture/' + imageName;
    
    // Thêm lớp 'show' để kích hoạt hiệu ứng CSS
    modal.classList.add('show');
}

/**
 * Ẩn modal.
 */
function hideModal() {
    // Xóa lớp 'show' để ẩn modal đi
    modal.classList.remove('show');
}

// === LẮNG NGHE CÁC SỰ KIỆN ĐỂ ĐÓNG MODAL ===

// 1. Click vào nút (X) sẽ đóng modal
closeButton.addEventListener('click', hideModal);

// 2. Click vào vùng nền mờ (chính là div.modal) sẽ đóng modal
modal.addEventListener('click', function(event) {
    // Chỉ đóng nếu phần tử được click là chính nó (nền mờ),
    // không phải là ảnh con bên trong.
    if (event.target === modal) {
        hideModal();
    }
});

// 3. Nhấn phím 'Escape' trên bàn phím cũng sẽ đóng modal
window.addEventListener('keydown', function(event) {
    // Kiểm tra xem phím được nhấn có phải là 'Escape' không
    // và modal có đang hiển thị không
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        hideModal();
    }
});