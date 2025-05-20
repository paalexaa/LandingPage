document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".links");
  const linkItems = document.querySelectorAll(".links a");
  const header = document.querySelector("header");
  const learnMoreBtn = document.querySelectorAll(".learn-more");
  const learnMoreBtn2 = document.querySelectorAll(".learn-more-2");

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

   // Change button style
   learnMoreBtn.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.classList.remove("btn-outline-sec2");
      button.classList.add("btn-solid-sec2");
    });

    button.addEventListener("mouseleave", () => {
      button.classList.remove("btn-solid-sec2");
      button.classList.add("btn-outline-sec2");
    });

    button.addEventListener("click", () => {
      window.location.href = "links/destinations.html";
    });
  });

    // Change button style for another section
    learnMoreBtn2.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.classList.remove("btn-outline-sec2");
      button.classList.add("btn-solid-sec2");
    });

    button.addEventListener("mouseleave", () => {
      button.classList.remove("btn-solid-sec2");
      button.classList.add("btn-outline-sec2");
    });

    button.addEventListener("click", () => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
});
