const qrDiv = document.getElementById('make_qr');
const btn = document.getElementById('btn_make');
const input = document.getElementById('url_input');

// Tạo nút tải QR (ẩn lúc đầu)
const downloadBtn = document.createElement('button');
downloadBtn.textContent = "Tải về QR";
downloadBtn.id = "btn_download";
downloadBtn.style.display = "none";
btn.insertAdjacentElement('afterend', downloadBtn);

btn.addEventListener('click', () => {
  const text = input.value.trim();

  if (!text) {
    input.style.boxShadow = "0 0 10px #ff4d4d";
    alert("⚠️ Please write your URL which you want to make QR code!");
    return;
  }

  input.style.boxShadow = "0 0 10px #00f260";
  qrDiv.innerHTML = "";

  new QRCode(qrDiv, {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000ff",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Hiện QR + nút tải
  qrDiv.style.display = "block";
  setTimeout(() => qrDiv.classList.add("show"), 50);
  downloadBtn.style.display = "inline-block";
});

// Tải QR về PNG
downloadBtn.addEventListener('click', () => {
  const img = qrDiv.querySelector('img');
  const canvas = qrDiv.querySelector('canvas');
  let dataURL = null;

  if (img) dataURL = img.src;
  else if (canvas) dataURL = canvas.toDataURL("image/png");

  if (dataURL) {
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "qrcode-bytuananh.png";
    a.click();
  } else {
    alert("Không tìm thấy QR để tải 😢");
  }
});
