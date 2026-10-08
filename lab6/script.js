const resourceLinks = document.querySelectorAll(".nav-button");

resourceLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(`Opening UofSC resource: ${link.textContent.trim()}`);
  });
});