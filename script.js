// Example: dynamic copyright year
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Your Name`;
});