function openModal(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");
  img.src = src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
const avatar = document.getElementById('avatar');
  
  avatar.addEventListener('mouseenter', () => {
    avatar.src = '/picture/avatar2.png';
  });

  avatar.addEventListener('mouseleave', () => {
    avatar.src = '/picture/avatar3.png';
  });