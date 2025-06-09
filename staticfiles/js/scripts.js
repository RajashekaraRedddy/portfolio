document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const body = document.body;

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function() {
      navLinks.classList.toggle("show");
      body.classList.toggle("no-scroll");
      menuToggle.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
    });
    
    // Close menu when clicking on a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        body.classList.remove("no-scroll");
        menuToggle.textContent = "☰";
      });
    });
  }
});