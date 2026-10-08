const resourceLinks = document.querySelectorAll(".nav-button, .resource-card, .hero-button");

resourceLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Opening UofSC student resource:", link.href);
  });
});