// Simple fade-in animation for sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    setTimeout(() => {
      section.style.transition = "opacity 0.8s";
      section.style.opacity = 1;
    }, 200 * index);
  });
});
