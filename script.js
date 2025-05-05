document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".links");
  const linkItems = document.querySelectorAll(".links a");
  const header = document.querySelector("header");

  // Toggle menu
  hamburger.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    links.classList.toggle("show");
  });

  // Close menu when a link is clicked (for mobile)
  linkItems.forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("show");
      hamburger.setAttribute("aria-expanded", false);
    });
  });

  // Change header on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
