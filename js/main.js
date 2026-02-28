// ============================
// MOBILE NAVIGATION
// ============================

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// ============================
// FADE-IN SCROLL ANIMATION
// ============================

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});