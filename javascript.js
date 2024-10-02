const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const registrasiBtn = document.getElementById("registrasiBtn");
const dropdownContent = document.getElementById("dropdownContent");

// Toggle navbar when burger is clicked
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("toggle");
});

// Toggle dropdown menu on mobile when Registrasi is clicked
registrasiBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah aksi default link
  dropdownContent.classList.toggle("active");
});

// Close dropdown if clicking outside of it
window.addEventListener("click", (e) => {
  if (!e.target.matches("#registrasiBtn") && !e.target.closest(".dropdown")) {
    dropdownContent.classList.remove("active");
  }
});
