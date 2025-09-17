// optional: efek animasi fade-in saat load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".poster-card").forEach(card => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease-in";
      card.style.opacity = 1;
    }, 200);
  });
});

const modal = document.getElementById("posterModal");
const modalImg = document.getElementById("modalImg");
const downloadBtn = document.getElementById("downloadBtn");
const closeBtn = document.querySelector(".close");

// Klik poster → buka modal
document.querySelectorAll(".poster-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // biar gak pindah halaman
    const imgSrc = link.getAttribute("href");
    modal.style.display = "block";
    modalImg.src = imgSrc;
    downloadBtn.href = imgSrc; // set link download
  });
});

// Tutup modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Klik luar modal → tutup
window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

