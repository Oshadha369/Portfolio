// Example: dynamic copyright year
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Oshadha Mularaje`;
});

// Dark/Light Mode Toggle
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  // Change button icon
  if (body.classList.contains("light-theme")) {
    toggleButton.textContent = "🌞"; // sun icon for light
  } else {
    toggleButton.textContent = "🌙"; // moon icon for dark
  }
});

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Hamburger menu toggle with animation
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open"); // triggers the X animation
});