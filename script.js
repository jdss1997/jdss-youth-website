// Show a welcome message when page loads
window.addEventListener("load", function() {
  console.log("JDSS Youth website loaded successfully!");
  alert("Welcome to JDSS Youth Website!");
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight active section while scrolling
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
      let activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});
