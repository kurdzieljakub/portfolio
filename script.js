const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Motyw ciemny/jasny
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  themeToggle.textContent = body.classList.contains("light") ? "🌞 Zmień motyw" : "🌙 Zmień motyw";
});

// Hamburger menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Zamknięcie menu po kliknięciu linku (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// Animacje przy przewijaniu
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => observer.observe(section));
