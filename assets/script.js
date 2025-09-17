// Image source switching
const bgImage = document.getElementById("bg-image");

function setImage() {
  if (window.innerWidth > 768) {
    bgImage.src = "assets/1.jpg"; // gambar landscape
  } else {
    bgImage.src = "assets/2.jpg"; // gambar portrait
  }
}

setImage();
window.addEventListener("resize", setImage);

window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hidden");
  document.querySelector(".container").classList.add("show");
});

// Dropdown toggle (cuma boleh 1 kebuka sekaligus)
document.querySelectorAll(".link-item").forEach(item => {
  item.addEventListener("click", () => {
    const dropdown = item.nextElementSibling;

    // tutup semua dropdown lain
    document.querySelectorAll(".dropdown.open").forEach(opened => {
      if (opened !== dropdown) opened.classList.remove("open");
    });

    // toggle dropdown yang diklik
    dropdown.classList.toggle("open");

    // kalau dropdown Layanan, buka semua sub-dropdown di dalamnya
    if (item.textContent.trim() === "Layanan" && dropdown.classList.contains("open")) {
      dropdown.querySelectorAll(".sub-dropdown").forEach(sub => {
        sub.classList.add("open");
      });
    }
  });
});

// Sub-dropdown toggle (bisa banyak terbuka sekaligus)
document.querySelectorAll(".sub-link-item").forEach(item => {
  item.addEventListener("click", () => {
    const dropdown = item.nextElementSibling;
    dropdown.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");

  // isi konten modal
  const modalContents = {
    skhpn: `
      <img src="assets/skhpn.jpg" alt="SKHPN" style="max-width: 100%; height: auto; margin-bottom: 15px;">
    `,
    magang: `
      <img src="assets/magang.jpg" alt="Magang" style="max-width: 100%; height: auto; margin-bottom: 15px;">
      `,
    sosialisasi: `
      <img src="assets/sosialisasi.jpg" alt="Sosialisasi" style="max-width: 100%; height: auto; margin-bottom: 15px;">
      `,
// 

  };

  // pas klik link Info
// pas klik link Info
document.querySelectorAll(".sub-dropdown a").forEach(link => {
  link.addEventListener("click", e => {
    // kalau Bank Poster, langsung ke halaman baru (skip modal)
    if (link.textContent.trim() === "Bank Poster") {
      return; // biarin default action jalan (href ke bank-poster.html)
    }

    if (link.textContent.trim() === "Perpustakaan BNN") {
      return; // biarin default action jalan (buka tab baru)
    }

    if (link.textContent.trim() === "Informasi NPS") {
      return; // biarin default action jalan (buka tab baru)
    }

    if (link.textContent.trim() === "Pengaduan") {
      return; // biarin default action jalan (buka tab baru)
    }

    if (link.textContent.trim() === "Pendaftaran") {
      return; // biarin default action jalan (buka tab baru)
    }

    e.preventDefault(); // selain Bank Poster, tahan default action

    const key = link.dataset.info;
    if (modalContents[key]) {
      modalBody.innerHTML = modalContents[key];
      modal.style.display = "flex";
    }
  });
});


  // close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // klik luar modal untuk nutup
  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
