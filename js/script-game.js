
function showGame(imageName) {
  const modal = document.getElementById("game-modal");
  const img = document.getElementById("game-image");
  img.src = "picture/" + imageName;
  modal.style.display = "flex";
}

function hideModal() {
  document.getElementById("game-modal").style.display = "none";
}

