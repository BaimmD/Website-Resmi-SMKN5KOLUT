// Toggle menu (mobile)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Dropdown (mobile)
document.querySelectorAll(".dropdown-toggle").forEach(drop => {
  drop.addEventListener("click", (e) => {
    e.preventDefault();
    drop.parentElement.classList.toggle("open");
  });
});

// Fungsi showContent (profil sekolah)
function showContent(contentId) {
  const allContents = document.querySelectorAll('.content-section');

  allContents.forEach(content => {
    if (content.id === contentId) {
      content.style.display = "flex";
      setTimeout(() => content.classList.add("active"), 50);
    } else {
      content.classList.remove("active");
      setTimeout(() => content.style.display = "none", 500);
    }
  });
}

// Default tampilkan Visi & Misi
document.addEventListener("DOMContentLoaded", () => {
  showContent("visi-misi");
});

// Tombol pengumuman lainnya
const showMoreBtn = document.getElementById("showMoreBtn");
const extraCards = document.querySelectorAll(".extra-card");

showMoreBtn.addEventListener("click", () => {
  const isHidden = !extraCards[0].classList.contains("show");

  if (isHidden) {
    extraCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.display = "block";
        setTimeout(() => card.classList.add("show"), 50);
      }, index * 150); // animasi berurutan
    });
    showMoreBtn.textContent = "Sembunyikan Pengumuman";
  } else {
    extraCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove("show");
        setTimeout(() => (card.style.display = "none"), 400);
      }, index * 150);
    });
    showMoreBtn.textContent = "Lihat Pengumuman Lainnya";
  }
});
